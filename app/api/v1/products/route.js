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

async function fetchProductRange(baseUrl, offset, count) {
    const result = [];
    let currentOffset = offset;

    while (result.length < count) {
        const url = new URL(baseUrl);
        const page = Math.floor(currentOffset / 100) + 1;
        const startIndex = currentOffset % 100;

        url.searchParams.set("page", String(page));
        url.searchParams.set("per_page", "100");

        const response = await fetch(url.toString());

        if (!response.ok) {
            throw new Error(
                `WooCommerce API error: ${response.status}`
            );
        }

        const batch = await response.json();
        const chunk = batch.slice(
            startIndex,
            startIndex + count - result.length
        );

        result.push(...chunk);
        currentOffset += chunk.length;

        if (chunk.length === 0 || batch.length < 100) {
            break;
        }
    }

    return result;
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

        // wooUrl.searchParams.set("featured", "true");


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

        const requestedPage = Math.max(1, Number(page));
        const requestedPerPage = Math.min(
            100,
            Math.max(1, Number(perPage))
        );

        const offset = (requestedPage - 1) * requestedPerPage;

        // Create featured and regular queries using existing filters
        const featuredUrl = new URL(wooUrl);
        featuredUrl.searchParams.delete("page");
        featuredUrl.searchParams.delete("per_page");
        featuredUrl.searchParams.set("featured", "true");

        const regularUrl = new URL(wooUrl);
        regularUrl.searchParams.delete("page");
        regularUrl.searchParams.delete("per_page");
        regularUrl.searchParams.set("featured", "false");

        async function getProductTotal(url) {
            url.searchParams.set("page", "1");
            url.searchParams.set("per_page", "1");

            const res = await fetch(url.toString());

            if (!res.ok) {
                throw new Error(`WooCommerce API error: ${res.status}`);
            }

            return Number(res.headers.get("X-WP-Total") || 0);
        }

        const [featuredTotal, regularTotal] = await Promise.all([
            getProductTotal(new URL(featuredUrl)),
            getProductTotal(new URL(regularUrl)),
        ]);

        const total = featuredTotal + regularTotal;
        const totalPages = Math.ceil(total / requestedPerPage);

        const featuredCount = Math.min(
            requestedPerPage,
            Math.max(0, featuredTotal - offset)
        );

        const regularCount = Math.min(
            requestedPerPage - featuredCount,
            Math.max(
                0,
                regularTotal - Math.max(0, offset - featuredTotal)
            )
        );

        const [featuredProducts, regularProducts] = await Promise.all([
            featuredCount > 0
                ? fetchProductRange(featuredUrl, offset, featuredCount)
                : Promise.resolve([]),

            regularCount > 0
                ? fetchProductRange(
                    regularUrl,
                    Math.max(0, offset - featuredTotal),
                    regularCount
                )
                : Promise.resolve([]),
        ]);

        const products = [...featuredProducts, ...regularProducts];

        // ///////
        // const metalRatesResponse = await fetch(
        //     `${new URL(request.url).origin}/api/v1/metal-rates`
        // );

        // if (!metalRatesResponse.ok) {
        //     throw new Error("Failed to fetch metal rates");
        // }

        // const metalRatesData = await metalRatesResponse.json();
        // const goldRate = metalRatesData?.gold?.["22k"];
        // //////

        // =========================
        // Get metal rates
        // =========================

        const metalRatesData = await getMetalRates();

        const gold22kRate = metalRatesData?.gold?.["22k"];
        const gold24kRate = metalRatesData?.gold?.["24k"];
        const silverRate = metalRatesData?.silver?.rate;

        // console.log("Gold rate:", goldRate);

        // =========================
        // Pagination information
        // =========================

        // const total = Number(
        //     response.headers.get("X-WP-Total") || 0
        // );

        // const totalPages = Number(
        //     response.headers.get("X-WP-TotalPages") || 0
        // );


        // =========================
        // Products with pricing calculation
        // =========================
        const productsWithPricing = products.map((product) => {
            const metal = getAttributeValue(product, "pa_metal");
            const purity = getAttributeValue(product, "pa_purity");

            const netWeight = getAttributeValue(
                product,
                "pa_net-weight-net"
            );

            let pricing = null;

            // =========================
            // Gold 22K pricing
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
                    goldRate = gold22kRate;
                }

                if (normalizedPurity === "24k") {
                    goldRate = gold24kRate;
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

                pricing = calculateSilverPrice({
                    netWeight: weight,
                    silverRate,
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
                page: requestedPage,
                per_page: requestedPerPage,
                total,
                total_pages: totalPages,
            },

        });
    } catch (error) {
        console.error("Products API error:", error);

        return NextResponse.json(
            {
                message: "Failed to fetch products",
                error: error.message,
            },
            { status: 500 }
        );
    }
}