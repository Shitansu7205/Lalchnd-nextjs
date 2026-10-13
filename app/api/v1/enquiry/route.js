
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend using the API key from environment variables.
// Keep the API key server-side and NEVER expose it to the frontend.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        // ---------------------------------------------------------
        // 1. Get customer and product data from the request body
        // ---------------------------------------------------------
        const { customer, product } = await request.json();

        // ---------------------------------------------------------
        // 2. Validate required customer fields
        // ---------------------------------------------------------
        // These fields are mandatory before we send the enquiry.
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
        // Product name is required so that we know which
        // product the customer is enquiring about.
        if (!product?.name) {
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
        // 4. Escape HTML values
        // ---------------------------------------------------------
        // Customer/product data is inserted into an HTML email.
        // Escaping prevents HTML from being injected into the email.
        const escapeHtml = (value = "") =>
            String(value).replace(
                /[&<>"']/g,
                (char) =>
                    ({
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                    })[char]
            );

        // ---------------------------------------------------------
        // 5. Send the enquiry email using Resend
        // ---------------------------------------------------------
        const { error } = await resend.emails.send({
            from: `Lalchand Enquiries <${process.env.RESEND_FROM_EMAIL}>`,
            to: [process.env.STORE_EMAIL],
            replyTo: customer.email,
            subject: `Product Enquiry: ${product.name}`,
            html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Product Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937; -webkit-font-smoothing: antialiased;">

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f4f6; padding: 40px 10px;">
        <tr>
            <td align="center">
                <!-- Main Container -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); border: 1px solid #e5e7eb;">
                    
                    <!-- Header Bar -->
                    <tr>
                        <td style="background-color: #111827; padding: 24px 32px; border-bottom: 3px solid #d97706;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <span style="color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">LALCHAND</span>
                                        <div style="color: #9ca3af; font-size: 12px; margin-top: 2px; font-weight: 500;">STORE ENQUIRY SYSTEM</div>
                                    </td>
                                    <td align="right">
                                        <span style="background-color: rgba(217, 119, 6, 0.2); color: #fbbf24; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">New Request</span>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Body Content -->
                    <tr>
                        <td style="padding: 32px;">
                            
                            <!-- Customer Details Section -->
                            <div style="margin-bottom: 28px;">
                                <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; color: #d97706; text-transform: uppercase; letter-spacing: 0.8px;">Customer Information</h2>
                                
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6;">
                                    <tr>
                                        <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; width: 30%; font-weight: 600; color: #4b5563; font-size: 14px;">Name</td>
                                        <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">${escapeHtml(customer.name)}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #4b5563; font-size: 14px;">Email</td>
                                        <td style="padding: 12px 16px; border-bottom: 1px solid #f3f4f6; color: #2563eb; font-size: 14px;">
                                            <a href="mailto:${escapeHtml(customer.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(customer.email)}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 16px; font-weight: 600; color: #4b5563; font-size: 14px;">Phone</td>
                                        <td style="padding: 12px 16px; color: #111827; font-size: 14px; font-weight: 500;">${escapeHtml(customer.phone)}</td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Customer Message Section -->
                            <div style="margin-bottom: 28px;">
                                <h2 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 700; color: #d97706; text-transform: uppercase; letter-spacing: 0.8px;">Message / Note</h2>
                                <div style="background-color: #fffbe2; border-left: 4px solid #d97706; padding: 14px 16px; border-radius: 0 8px 8px 0; font-size: 14px; color: #374151; line-height: 1.6;">
                                    ${escapeHtml(customer.message).replace(/\n/g, "<br />")}
                                </div>
                            </div>

                            <!-- Product Details Section -->
                            <div>
                                <h2 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 700; color: #d97706; text-transform: uppercase; letter-spacing: 0.8px;">Product Requested</h2>
                                
                                <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                                    <!-- Title Row -->
                                    <div style="background-color: #f9fafb; padding: 16px; border-bottom: 1px solid #e5e7eb;">
                                        <div style="font-size: 16px; font-weight: 700; color: #111827;">${escapeHtml(product.name)}</div>
                                        <div style="font-size: 13px; color: #6b7280; margin-top: 2px;">Code: <span style="font-weight: 600; color: #374151;">${escapeHtml(product.code || "N/A")}</span></div>
                                    </div>

                                    <!-- Product Specs Grid -->
                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding: 8px 16px;">
                                        <tr>
                                            <td style="padding: 8px 0; font-size: 13px; color: #6b7280; width: 50%;">Metal Type: <strong style="color: #111827;">${escapeHtml(product.metal || "N/A")}</strong></td>
                                            <td style="padding: 8px 0; font-size: 13px; color: #6b7280; width: 50%;">Purity: <strong style="color: #111827;">${escapeHtml(product.purity || "N/A")}</strong></td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 8px 0; font-size: 13px; color: #6b7280;">Net Weight: <strong style="color: #111827;">${escapeHtml(product.netWeight || "N/A")}</strong></td>
                                            <td style="padding: 8px 0; font-size: 13px; color: #6b7280;">Est. Price: <strong style="color: #059669; font-size: 14px;">₹${escapeHtml(product.price ?? "Unavailable")}</strong></td>
                                        </tr>
                                    </table>

                                    <!-- Product URL Button -->
                                    <div style="padding: 16px; background-color: #f9fafb; border-top: 1px solid #e5e7eb; text-align: right;">
                                        <a href="${escapeHtml(product.url || "#")}" target="_blank" style="display: inline-block; background-color: #111827; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 600; padding: 8px 16px; border-radius: 6px;">
                                            View Product Page &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f9fafb; padding: 20px 32px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #9ca3af;">
                            This is an automated enquiry email generated from your store catalog.
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>

</body>
</html>
    `,
        });

        // ---------------------------------------------------------
        // 6. Handle Resend error
        // ---------------------------------------------------------
        // Resend can return an error even if the API request itself
        // was successfully processed.
        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                {
                    message: "Unable to send your enquiry right now.",
                },
                {
                    status: 500,
                }
            );
        }

        // ---------------------------------------------------------
        // 7. Successfully sent
        // ---------------------------------------------------------
        return NextResponse.json(
            {
                message: "Your enquiry has been sent successfully.",
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        // ---------------------------------------------------------
        // 8. Handle unexpected/server errors
        // ---------------------------------------------------------
        console.error("Enquiry API error:", error);

        return NextResponse.json(
            {
                message: "Unable to send your enquiry right now.",
            },
            {
                status: 500,
            }
        );
    }
}
