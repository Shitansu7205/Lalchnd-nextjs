import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactEmail } from "@/lib/email";

export async function POST(request) {
    try {
        // ---------------------------------------------------------
        // 1. Get contact form data from the request body
        // ---------------------------------------------------------
        const {
            name,
            phone,
            email,
            storeCity,
            subject,
            message,
        } = await request.json();

        // ---------------------------------------------------------
        // 2. Validate required fields
        // ---------------------------------------------------------
        if (
            !name?.trim() ||
            !phone?.trim() ||
            !email?.trim() ||
            !storeCity?.trim() ||
            !message?.trim()
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
        // 3. Save contact message to Supabase
        // ---------------------------------------------------------
        const contactMessage = await prisma.contactMessage.create({
            data: {
                name: name.trim(),
                phone: phone.trim(),
                email: email.trim(),
                storeCity: storeCity.trim(),
                subject: subject?.trim() || null,
                message: message.trim(),
            },
        });

        // ---------------------------------------------------------
        // 2. Send enquiry email
        // ---------------------------------------------------------
        await sendContactEmail({
            name,
            phone,
            email,
            storeCity,
            subject,
            message,
        });

        // ---------------------------------------------------------
        // 4. Successfully saved
        // ---------------------------------------------------------
        return NextResponse.json(
            {
                message: "Your message has been sent successfully.",
                id: contactMessage.id,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        // ---------------------------------------------------------
        // 5. Handle unexpected/server errors
        // ---------------------------------------------------------
        console.error("Contact API error:", error);

        return NextResponse.json(
            {
                message: "Unable to send your message right now.",
            },
            {
                status: 500,
            }
        );
    }
}