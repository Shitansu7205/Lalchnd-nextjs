import { NextResponse } from "next/server";
import {
    calculateGoldPrice,
    calculateSilverPrice,
} from "@/lib/pricing";
import { getMetalRates } from "@/lib/metal-rates";

function getAttributeValue(product, taxonomy) {
    const attribute = product.attributes?.find(
        (item) => item.taxonomy === taxonomy
    );

    return attribute?.terms?.[0]?.name || null;
}

export async function GET(request, { params }) {
    try {
        const { slug } = await params;

        if (!slug) {
            return NextResponse.json(
                {
                    message: "Product slug is required",
                },
                { status: 400 }
            );
        }

        // WooCommerce product
        const wooUrl = new URL(
            "https://test-vps.testctsl.in/wp-json/wc/store/v1/products"
        );

        wooUrl.searchParams.set("slug", slug);

        const response = await fetch(wooUrl.toString());

        if (!response.ok) {
            throw new Error(
                `WooCommerce API error: ${response.status}`
            );
        }

        const products = await response.json();

        if (!products.length) {
            return NextResponse.json(
                {
                    message: "Product not found",
                },
                { status: 404 }
            );
        }

        const product = products[0];

        // =========================
        // Get live metal rates
        // =========================

        const metalRates = await getMetalRates();


        // =========================
        // Product attributes
        // =========================
        const metal = getAttributeValue(product, "pa_metal");
        const purity = getAttributeValue(product, "pa_purity");
        const netWeight = getAttributeValue(
            product,
            "pa_net-weight-net"
        );

        // =========================
        // Product pricing
        // =========================
        let pricing = null;

        // =========================
        // Gold pricing
        // Supports 22K and 24K
        // =========================
        if (
            metal?.toLowerCase() === "gold" &&
            purity &&
            netWeight
        ) {
            const normalizedPurity = purity
                .toLowerCase()
                .replace(/\s/g, "");

            let goldRate = null;

            if (normalizedPurity === "22k") {
                goldRate = metalRates?.gold?.["22k"];
            }

            if (normalizedPurity === "24k") {
                goldRate = metalRates?.gold?.["24k"];
            }

            if (goldRate) {
                const weight = parseFloat(netWeight);

                pricing = calculateGoldPrice({
                    netWeight: weight,
                    goldRate,
                    purity: normalizedPurity,
                });
            }
        }

        // =========================
        // Silver pricing
        // =========================
        if (
            metal?.toLowerCase() === "silver" &&
            netWeight
        ) {
            const weight = parseFloat(netWeight);

            const silverRate = metalRates?.silver?.rate;

            pricing = calculateSilverPrice({
                netWeight: weight,
                silverRate,
            });
        }

        return NextResponse.json({
            product: {
                ...product,
                pricing,
            },
        });
    } catch (error) {
        console.error("Product detail API error:", error);

        return NextResponse.json(
            {
                message: "Failed to fetch product",
            },
            { status: 500 }
        );
    }
}