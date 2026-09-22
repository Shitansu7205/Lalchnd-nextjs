import { NextResponse } from "next/server";

const WC_STORE_URL =
    process.env.WC_STORE_URL ||
    "https://ctsdemo.com/lalchnd-ecom-wp/wp-json/wc/store/v1";

// export async function GET(request) {
//     try {
//         const { searchParams } = new URL(request.url);

//         const params = new URLSearchParams();

//         /*
//         |--------------------------------------------------------------------------
//         | BASIC
//         |--------------------------------------------------------------------------
//         */

//         const page = searchParams.get("page");
//         const perPage = searchParams.get("per_page");
//         const search = searchParams.get("search");

//         if (page) {
//             params.set("page", page);
//         }

//         if (perPage) {
//             params.set("per_page", perPage);
//         }

//         if (search) {
//             params.set("search", search);
//         }

//         /*
//         |--------------------------------------------------------------------------
//         | CATEGORY
//         |--------------------------------------------------------------------------
//         */

//         const category = searchParams.get("category");

//         if (category) {
//             params.set("category", category);
//         }

//         /*
//         |--------------------------------------------------------------------------
//         | PRICE
//         |--------------------------------------------------------------------------
//         */

//         const minPrice = searchParams.get("min_price");
//         const maxPrice = searchParams.get("max_price");

//         if (minPrice) {
//             params.set("min_price", minPrice);
//         }

//         if (maxPrice) {
//             params.set("max_price", maxPrice);
//         }

//         /*
//         |--------------------------------------------------------------------------
//         | STOCK
//         |--------------------------------------------------------------------------
//         */

//         const stockStatus = searchParams.get("stock_status");

//         if (stockStatus) {
//             params.set("stock_status", stockStatus);
//         }

//         /*
//         |--------------------------------------------------------------------------
//         | SALE
//         |--------------------------------------------------------------------------
//         */

//         const onSale = searchParams.get("on_sale");

//         if (onSale) {
//             params.set("on_sale", onSale);
//         }

//         /*
//         |--------------------------------------------------------------------------
//         | SORTING
//         |--------------------------------------------------------------------------
//         */

//         const orderby = searchParams.get("orderby");
//         const order = searchParams.get("order");

//         if (orderby) {
//             params.set("orderby", orderby);
//         }

//         if (order) {
//             params.set("order", order);
//         }

//         /*
//         |--------------------------------------------------------------------------
//         | ATTRIBUTES
//         |--------------------------------------------------------------------------
//         */

//         const attributes = [];

//         const metal = searchParams.get("metal");
//         const gender = searchParams.get("gender");
//         const occasion = searchParams.get("occasion");
//         const purity = searchParams.get("purity");

//         if (metal) {
//             attributes.push({
//                 attribute: "pa_metal",
//                 slug: metal,
//             });
//         }

//         if (gender) {
//             attributes.push({
//                 attribute: "pa_gender",
//                 slug: gender,
//             });
//         }

//         if (occasion) {
//             attributes.push({
//                 attribute: "pa_occasion",
//                 slug: occasion,
//             });
//         }

//         if (purity) {
//             attributes.push({
//                 attribute: "pa_purity",
//                 slug: purity,
//             });
//         }

//         attributes.forEach((attribute, index) => {
//             params.set(
//                 `attributes[${index}][attribute]`,
//                 attribute.attribute
//             );

//             params.set(
//                 `attributes[${index}][slug]`,
//                 attribute.slug
//             );
//         });

//         if (attributes.length > 1) {
//             params.set("attribute_relation", "AND");
//         }

//         /*
//         |--------------------------------------------------------------------------
//         | WOOCOMMERCE REQUEST
//         |--------------------------------------------------------------------------
//         */

//         const response = await fetch(
//             `${WC_STORE_URL}/products?${params.toString()}`,
//             {
//                 next: {
//                     revalidate: 60,
//                 },
//             }
//         );

//         const data = await response.json();

//         if (!response.ok) {
//             return NextResponse.json(
//                 {
//                     error: data,
//                 },
//                 {
//                     status: response.status,
//                 }
//             );
//         }

//         return NextResponse.json(data);
//     } catch (error) {
//         console.error("Products API Error:", error);

//         return NextResponse.json(
//             {
//                 error: "Failed to fetch products",
//             },
//             {
//                 status: 500,
//             }
//         );
//     }
// }






export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);

        const params = new URLSearchParams();

        // Pagination
        const page = searchParams.get("page");
        const perPage = searchParams.get("per_page");

        if (page) {
            params.set("page", page);
        }

        if (perPage) {
            params.set("per_page", perPage);
        }

        // Search
        const search = searchParams.get("search");

        if (search) {
            params.set("search", search);
        }

        // Category
        const category = searchParams.get("category");

        if (category) {
            params.set("category", category);
        }

        const response = await fetch(
            `${WC_STORE_URL}/products?${params.toString()}`,
            {
                cache: "no-store",
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data },
                { status: response.status }
            );
        }

        return NextResponse.json(data);

    } catch (error) {
        console.error("Products API Error:", error);

        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}