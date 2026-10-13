import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const brandLogoUrl = "https://lalchnd.testctsl.in/images/lalchnd/blogs/logo.png";
const brandWebsiteUrl = "https://lalchnd.com";

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

const formatMessage = (value = "") =>
    escapeHtml(value).replace(/\r?\n/g, "<br />");

const renderDetails = (rows) => `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
        ${rows
            .map(
                ({ label, value, href }) => `
                    <tr>
                        <td width="34%" valign="top" style="padding:13px 12px 13px 0;border-bottom:1px solid #eee9df;color:#746f66;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;">
                            ${escapeHtml(label)}
                        </td>
                        <td valign="top" style="padding:13px 0;border-bottom:1px solid #eee9df;color:#26241f;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:21px;font-weight:600;word-break:break-word;">
                            ${
                                href
                                    ? `<a href="${escapeHtml(href)}" style="color:#775a2a;text-decoration:underline;">${escapeHtml(value)}</a>`
                                    : escapeHtml(value)
                            }
                        </td>
                    </tr>
                `
            )
            .join("")}
    </table>
`;

const renderSection = (title, content) => `
    <tr>
        <td style="padding:24px 32px 0;">
            <h2 style="margin:0 0 12px;color:#26241f;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:21px;font-weight:700;">
                ${title}
            </h2>
            ${content}
        </td>
    </tr>
`;

const renderEmail = ({ preheader, category, title, intro, sections }) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f2ed;color:#26241f;font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
        ${escapeHtml(preheader)}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;background-color:#f4f2ed;">
        <tr>
            <td align="center" style="padding:36px 14px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:620px;background-color:#ffffff;border:1px solid #e9e5dc;">
                    <tr>
                        <td align="center" style="padding:26px 24px 22px;border-bottom:1px solid #eee9df;">
                            <a href="${brandWebsiteUrl}" style="display:inline-block;text-decoration:none;">
                                <img src="${brandLogoUrl}" width="158" alt="Lalchnd — Trusted Brand Since 1948" style="display:block;width:158px;max-width:100%;height:auto;border:0;" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:28px 32px 4px;">
                            <p style="margin:0 0 10px;color:#8a6d3b;font-size:11px;line-height:16px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">
                                ${escapeHtml(category)}
                            </p>
                            <h1 style="margin:0;color:#26241f;font-size:24px;line-height:31px;font-weight:600;">
                                ${escapeHtml(title)}
                            </h1>
                            <p style="margin:10px 0 0;color:#716d65;font-size:14px;line-height:22px;">
                                ${escapeHtml(intro)}
                            </p>
                        </td>
                    </tr>
                    ${sections.join("")}
                    <tr>
                        <td style="padding:28px 32px 26px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top:1px solid #eee9df;">
                                <tr>
                                    <td align="center" style="padding-top:18px;color:#858077;font-size:12px;line-height:19px;">
                                        Lalchnd Jewellers<br />
                                        <a href="${brandWebsiteUrl}" style="color:#775a2a;text-decoration:none;">lalchnd.com</a>
                                        <br /><br />
                                        This message was sent from the Lalchnd website enquiry form.
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

/**
 * Send Product Enquiry email
 */
export async function sendProductEnquiryEmail({ customer, product }) {
    const productUrl = (() => {
        try {
            const url = new URL(product.url);
            return ["http:", "https:"].includes(url.protocol) ? url.href : "";
        } catch {
            return "";
        }
    })();

    const sections = [
        renderSection(
            "Customer details",
            renderDetails([
                { label: "Name", value: customer.name },
                {
                    label: "Email",
                    value: customer.email,
                    href: `mailto:${customer.email}`,
                },
                {
                    label: "Phone",
                    value: customer.phone,
                    href: `tel:${customer.phone}`,
                },
            ])
        ),
        renderSection(
            "Message",
            `<div style="padding:16px 18px;background:#f8f6f1;border-left:3px solid #b08d57;color:#48443d;font-size:14px;line-height:23px;word-break:break-word;">${formatMessage(customer.message)}</div>`
        ),
        renderSection(
            "Product of interest",
            `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e9e5dc;border-collapse:collapse;">
                <tr>
                    <td colspan="2" style="padding:16px 18px;background:#faf9f6;border-bottom:1px solid #e9e5dc;">
                        <div style="color:#26241f;font-size:16px;line-height:22px;font-weight:700;">${escapeHtml(product.name)}</div>
                        <div style="margin-top:5px;color:#746f66;font-size:13px;line-height:19px;">Product code: <strong style="color:#26241f;">${escapeHtml(product.code || "N/A")}</strong></div>
                    </td>
                </tr>
                <tr>
                    <td style="padding:14px 18px;color:#746f66;font-size:13px;line-height:20px;border-bottom:1px solid #eee9df;">Metal<br /><strong style="color:#26241f;">${escapeHtml(product.metal || "N/A")}</strong></td>
                    <td style="padding:14px 18px;color:#746f66;font-size:13px;line-height:20px;border-bottom:1px solid #eee9df;">Purity<br /><strong style="color:#26241f;">${escapeHtml(product.purity || "N/A")}</strong></td>
                </tr>
                <tr>
                    <td style="padding:14px 18px;color:#746f66;font-size:13px;line-height:20px;">Net weight<br /><strong style="color:#26241f;">${escapeHtml(product.netWeight || "N/A")}</strong></td>
                    <td style="padding:14px 18px;color:#746f66;font-size:13px;line-height:20px;">Estimated price<br /><strong style="color:#26241f;">${product.price == null ? "Unavailable" : `₹${escapeHtml(product.price)}`}</strong></td>
                </tr>
                ${
                    productUrl
                        ? `<tr>
                    <td colspan="2" align="center" style="padding:17px 18px;border-top:1px solid #e9e5dc;">
                        <a href="${escapeHtml(productUrl)}" style="display:inline-block;padding:11px 20px;background:#26241f;color:#ffffff;font-size:13px;line-height:18px;font-weight:700;text-decoration:none;">View product</a>
                    </td>
                </tr>`
                        : ""
                }
            </table>`
        ),
    ];

    const { error } = await resend.emails.send({
        from: `Lalchand Enquiries <${process.env.RESEND_FROM_EMAIL}>`,
        to: [process.env.STORE_EMAIL],
        replyTo: customer.email,
        subject: `Product Enquiry: ${product.name}`,
        html: renderEmail({
            preheader: `A new enquiry for ${product.name} from ${customer.name}.`,
            category: "Product enquiry",
            title: "A customer is interested in a product",
            intro: "Review the customer’s details and requested product below.",
            sections,
        }),
    });

    if (error) {
        console.error("Product enquiry email error:", error);
        throw error;
    }

    return true;
}

/**
 * Send Contact Enquiry email
 */
export async function sendContactEmail({
    name,
    phone,
    email,
    storeCity,
    subject,
    message,
}) {
    const sections = [
        renderSection(
            "Customer details",
            renderDetails([
                { label: "Name", value: name },
                { label: "Email", value: email, href: `mailto:${email}` },
                { label: "Phone", value: phone, href: `tel:${phone}` },
                { label: "Preferred store city", value: storeCity },
                { label: "Subject", value: subject || "General enquiry" },
            ])
        ),
        renderSection(
            "Message",
            `<div style="padding:16px 18px;background:#f8f6f1;border-left:3px solid #b08d57;color:#48443d;font-size:14px;line-height:23px;word-break:break-word;">${formatMessage(message)}</div>`
        ),
    ];

    const { error } = await resend.emails.send({
        from: `Lalchand Enquiries <${process.env.RESEND_FROM_EMAIL}>`,
        to: [process.env.STORE_EMAIL],
        replyTo: email,
        subject: `Contact Enquiry: ${subject || "New Enquiry"}`,
        html: renderEmail({
            preheader: `A new contact enquiry from ${name}.`,
            category: "Contact enquiry",
            title: "A customer has contacted us",
            intro: "A new message has been submitted through the Lalchnd website.",
            sections,
        }),
    });

    if (error) {
        console.error("Contact enquiry email error:", error);
        throw error;
    }

    return true;
}
