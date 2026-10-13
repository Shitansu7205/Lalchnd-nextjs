import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
    try {
        // Get email from request body
        const { email } = await request.json();

        // Validate required field
        if (!email?.trim()) {
            return NextResponse.json(
                { message: "Email address is required." },
                { status: 400 }
            );
        }

        // Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // Check if email is already subscribed
        const existingSubscriber =
            await prisma.newsletterSubscriber.findUnique({
                where: {
                    email: normalizedEmail,
                },
            });

        if (existingSubscriber) {
            return NextResponse.json(
                { message: "This email is already subscribed." },
                { status: 409 }
            );
        }

        // Save newsletter subscriber to database
        const subscriber =
            await prisma.newsletterSubscriber.create({
                data: {
                    email: normalizedEmail,
                },
            });

        // Return success response
        return NextResponse.json(
            {
                message:
                    "You have successfully subscribed to our newsletter.",
                id: subscriber.id,
            },
            { status: 200 }
        );
    } catch (error) {
        // Log server error
        console.error("Newsletter API error:", error);

        // Return error response
        return NextResponse.json(
            {
                message:
                    "Unable to subscribe right now. Please try again.",
            },
            { status: 500 }
        );
    }
}