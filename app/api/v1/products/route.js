import { NextResponse } from "next/server";

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

        // =========================
        // Pagination information
        // =========================

        const total = Number(
            response.headers.get("X-WP-Total") || 0
        );

        const totalPages = Number(
            response.headers.get("X-WP-TotalPages") || 0
        );

        // =========================
        // API response
        // =========================

        return NextResponse.json({
            products,
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