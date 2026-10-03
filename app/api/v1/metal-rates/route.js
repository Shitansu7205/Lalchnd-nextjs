import { NextResponse } from "next/server";
import { getMetalRates } from "@/lib/metal-rates";

export async function GET() {
    try {
        const metalRates = await getMetalRates();

        return NextResponse.json({
            success: true,
            ...metalRates,
        });
    } catch (error) {
        console.error("Metal rates error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Unable to fetch metal rates",
            },
            {
                status: 500,
            }
        );
    }
}