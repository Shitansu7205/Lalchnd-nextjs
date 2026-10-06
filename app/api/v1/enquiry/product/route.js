import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendProductEnquiryEmail } from "@/lib/email";

export async function POST(request) {
    try {
        // ---------------------------------------------------------
        // 1. Get customer and product data
        // ---------------------------------------------------------
        const { customer, product } = await request.json();

        // ---------------------------------------------------------
        // 2. Validate customer information
        // ---------------------------------------------------------
        if (
            !customer?.name?.trim() ||
            !customer?.email?.trim() ||
            !customer?.phone?.trim() ||
            !customer?.message?.trim()
        ) {
            return NextResponse.json(
                {
                    message: "Please fill in all required fields.",
                },
                {
                    status: 400,
                }
            );
        }

        // ---------------------------------------------------------
        // 3. Validate product information
        // ---------------------------------------------------------
        if (!product?.name?.trim()) {
            return NextResponse.json(
                {
                    message: "Product information is missing.",
                },
                {
                    status: 400,
                }
            );
        }

        // ---------------------------------------------------------
        // 4. Save enquiry to Supabase
        // ---------------------------------------------------------
        const enquiry = await prisma.productEnquiry.create({
            data: {
                name: customer.name.trim(),
                phone: customer.phone.trim(),
                email: customer.email.trim(),
                message: customer.message.trim(),

                productName: product.name.trim(),
                productCode: product.code?.trim() || null,
                metal: product.metal?.trim() || null,
                purity: product.purity?.trim() || null,
                netWeight: product.netWeight?.trim() || null,
                price:
                    product.price !== undefined &&
                        product.price !== null
                        ? String(product.price)
                        : null,
                productUrl: product.url?.trim() || null,
            },
        });


        // ---------------------------------------------------------
        // 2. Send enquiry email
        // ---------------------------------------------------------

        await sendProductEnquiryEmail({
            customer,
            product,
        });


        // ---------------------------------------------------------
        // 5. Successfully saved
        // ---------------------------------------------------------
        return NextResponse.json(
            {
                message: "Enquiry submitted successfully!",
                id: enquiry.id,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        // ---------------------------------------------------------
        // 6. Handle unexpected/server errors
        // ---------------------------------------------------------
        console.error("Product enquiry API error:", error);

        return NextResponse.json(
            {
                message: "Unable to submit your enquiry right now.",
            },
            {
                status: 500,
            }
        );
    }
}