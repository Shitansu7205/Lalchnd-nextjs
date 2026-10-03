const PRICING_RULES = {
    gold: {
        purity: "22k",
        makingChargePercent: 8.99,
    },
    silver: {
        makingCharge: 60,
        type: "per_gram",
    },
};

export function calculateGoldPrice({
    netWeight,
    goldRate,
}) {
    const weight = Number(netWeight);
    const rate = Number(goldRate);

    if (!weight || !rate) {
        return null;
    }

    // Gold value
    const metalValue = weight * rate;

    // Making charge
    const makingCharge =
        metalValue *
        (PRICING_RULES.gold.makingChargePercent / 100);

    // Final calculated gold price
    const finalPrice = metalValue + makingCharge;

    return {
        metal: "gold",
        purity: PRICING_RULES.gold.purity,

        netWeight: weight,
        goldRate: rate,

        metalValue,
        makingCharge,

        makingChargePercent:
            PRICING_RULES.gold.makingChargePercent,

        finalPrice,
    };
}

export function calculateSilverPrice({
    netWeight,
    silverRate,
}) {
    const weight = Number(netWeight);
    const rate = Number(silverRate);

    if (!weight || !rate) {
        return null;
    }

    // Silver value
    const metalValue = weight * rate;

    // Making charge = weight × ₹60/g
    const makingCharge =
        weight * PRICING_RULES.silver.makingCharge;

    // Final calculated silver price
    const finalPrice = metalValue + makingCharge;

    return {
        metal: "silver",

        netWeight: weight,
        silverRate: rate,

        metalValue,
        makingCharge,

        makingChargePerGram:
            PRICING_RULES.silver.makingCharge,

        finalPrice,
    };
}

