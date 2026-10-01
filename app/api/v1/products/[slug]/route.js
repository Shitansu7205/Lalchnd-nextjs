import { NextResponse } from "next/server";
import { calculateGoldPrice } from "@/lib/pricing";

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

        // Get live metal rates
        const metalRatesResponse = await fetch(
            `${new URL(request.url).origin}/api/v1/metal-rates`,
            {
                cache: "no-store",
            }
        );

        if (!metalRatesResponse.ok) {
            throw new Error("Failed to fetch metal rates");
        }

        const metalRates = await metalRatesResponse.json();


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
        // Gold 22K pricing
        // =========================
        if (
            metal?.toLowerCase() === "gold" &&
            purity?.toLowerCase() === "22k" &&
            netWeight
        ) {
            const weight = parseFloat(netWeight);

            const goldRate = metalRates?.gold?.["22k"];

            pricing = calculateGoldPrice({
                netWeight: weight,
                goldRate,
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