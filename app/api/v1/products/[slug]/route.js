import { NextResponse } from "next/server";

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

        const wooUrl = new URL(
            "https://test-vps.testctsl.in/wp-json/wc/store/v1/products"
        );

        // Send slug to WooCommerce
        wooUrl.searchParams.set("slug", slug);

        const response = await fetch(wooUrl.toString());

        if (!response.ok) {
            throw new Error(
                `WooCommerce API error: ${response.status}`
            );
        }

        const products = await response.json();

        // WooCommerce returns an array for ?slug=
        if (!products.length) {
            return NextResponse.json(
                {
                    message: "Product not found",
                },
                { status: 404 }
            );
        }

        // Since slug should identify one product
        const product = products[0];

        return NextResponse.json({
            product,
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