import { NextResponse } from "next/server";
import { calculateGoldPrice } from "@/lib/pricing";



function getAttributeValue(product, taxonomy) {
    const attribute = product.attributes?.find(
        (item) => item.taxonomy === taxonomy
    );

    return attribute?.terms?.[0]?.name || null;
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);

        // =========================
        // Frontend query parameters
        // =========================

        const category = searchParams.get("category");
        const metal = searchParams.get("metal");
        const gender = searchParams.get("gender");
        const occasion = searchParams.get("occasion");
        const purity = searchParams.get("purity");
        const search = searchParams.get("search");

        const page = searchParams.get("page") || "1";
        const perPage = searchParams.get("per_page") || "20";

        // =========================
        // WooCommerce API URL
        // =========================

        const wooUrl = new URL(
            "https://test-vps.testctsl.in/wp-json/wc/store/v1/products"
        );

        // =========================
        // Pagination
        // =========================

        wooUrl.searchParams.set("page", page);
        wooUrl.searchParams.set("per_page", perPage);

        // =========================
        // Category
        // =========================

        if (category) {
            wooUrl.searchParams.set("category", category);
        }

        // =========================
        // Metal
        // =========================

        if (metal) {
            wooUrl.searchParams.set(
                "attributes[0][attribute]",
                "pa_metal"
            );

            wooUrl.searchParams.set(
                "attributes[0][slug]",
                metal
            );
        }

        // =========================
        // Gender
        // =========================

        if (gender) {
            wooUrl.searchParams.set(
                "attributes[1][attribute]",
                "pa_gender"
            );

            wooUrl.searchParams.set(
                "attributes[1][slug]",
                gender
            );
        }

        // =========================
        // Occasion
        // =========================

        if (occasion) {
            wooUrl.searchParams.set(
                "attributes[2][attribute]",
                "pa_occasion"
            );

            wooUrl.searchParams.set(
                "attributes[2][slug]",
                occasion
            );
        }

        // =========================
        // Purity
        // =========================

        if (purity) {
            wooUrl.searchParams.set(
                "attributes[3][attribute]",
                "pa_purity"
            );

            wooUrl.searchParams.set(
                "attributes[3][slug]",
                purity
            );
        }

        // Search
        if (search) {
            wooUrl.searchParams.set("search", search);
        }

        // =========================
        // Fetch WooCommerce
        // =========================

        const response = await fetch(wooUrl.toString());

        if (!response.ok) {
            throw new Error(
                `WooCommerce API error: ${response.status}`
            );
        }

        const products = await response.json();


        ///////
        const metalRatesResponse = await fetch(
            `${new URL(request.url).origin}/api/v1/metal-rates`
        );

        if (!metalRatesResponse.ok) {
            throw new Error("Failed to fetch metal rates");
        }

        const metalRatesData = await metalRatesResponse.json();
        const goldRate = metalRatesData?.gold?.["22k"];
        //////

        // =========================
        // Pagination information
        // =========================

        const total = Number(
            response.headers.get("X-WP-Total") || 0
        );

        const totalPages = Number(
            response.headers.get("X-WP-TotalPages") || 0
        );


        const productsWithPricing = products.map((product) => {
            const metal = getAttributeValue(product, "pa_metal");
            const purity = getAttributeValue(product, "pa_purity");
            const netWeight = getAttributeValue(
                product,
                "pa_net-weight-net"
            );
            const stone = getAttributeValue(
                product,
                "pa_stone"
            );
            const stoneWeight = stone
                ? parseFloat(stone)
                : 0;
            let pricing = null;

            if (
                metal?.toLowerCase() === "gold" &&
                purity?.toLowerCase() === "22k" &&
                netWeight
            ) {
                const weight = parseFloat(netWeight);

                pricing = calculateGoldPrice({
                    netWeight: weight,
                    goldRate,
                    stoneWeight,
                });
            }

            return {
                ...product,
                pricing,
            };
        });


        // =========================
        // API response
        // =========================

        return NextResponse.json({
            products: productsWithPricing,
            pagination: {
                page: Number(page),
                per_page: Number(perPage),
                total,
                total_pages: totalPages,
            },
        });
    } catch (error) {
        console.error("Products API error:", error);

        return NextResponse.json(
            {
                message: "Failed to fetch products",
            },
            { status: 500 }
        );
    }
}