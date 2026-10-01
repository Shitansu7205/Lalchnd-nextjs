const GOLD_API =
    "https://snapdata.dev/api/v1/gold/in/latest.json";

const SILVER_API =
    "https://snapdata.dev/api/v1/silver/in/latest.json";

export async function getMetalRates() {
    const [goldResponse, silverResponse] = await Promise.all([
        fetch(GOLD_API, {
            next: { revalidate: 3600 },
        }),
        fetch(SILVER_API, {
            next: { revalidate: 3600 },
        }),
    ]);

    if (!goldResponse.ok || !silverResponse.ok) {
        throw new Error("Failed to fetch metal rates");
    }

    const goldData = await goldResponse.json();
    const silverData = await silverResponse.json();

    const goldRates = {};

    for (const observation of goldData.observations || []) {
        if (observation.value !== null) {
            if (observation.instrument === "XAU.24K") {
                goldRates["24k"] = observation.value;
            }

            if (observation.instrument === "XAU.22K") {
                goldRates["22k"] = observation.value;
            }

            if (observation.instrument === "XAU.18K") {
                goldRates["18k"] = observation.value;
            }
        }
    }

    const silverObservation = (silverData.observations || []).find(
        (observation) =>
            observation.instrument === "XAG"
    );

    const silverPerGram = silverObservation?.value
        ? Number(silverObservation.value) / 1000
        : null;

    return {
        gold: {
            "24k": goldRates["24k"] ?? null,
            "22k": goldRates["22k"] ?? null,
            "18k": goldRates["18k"] ?? null,
            unit: "INR/g",
        },

        silver: {
            rate: silverPerGram,
            unit: "INR/g",
        },

        source: "SnapData / IBJA",
    };
}