const PRICING_RULES = {
    gold: {
        "22k": {
            makingChargePercent: 8.99,
        },
        "24k": {
            makingChargePercent: 8.99,
        },
    },
    silver: {
        makingCharge: 60,
        type: "per_gram",
    },
};

export function calculateGoldPrice({
    netWeight,
    goldRate,
    purity,
}) {
    const weight = Number(netWeight);
    const rate = Number(goldRate);

    if (!weight || !rate || !purity) {
        return null;
    }

    const normalizedPurity = String(purity)
        .toLowerCase()
        .replace(/\s/g, "");

    const purityRule = PRICING_RULES.gold[normalizedPurity];

    if (!purityRule) {
        return null;
    }

    // Gold value
    const metalValue = weight * rate;

    // Making charge
    const makingCharge =
        metalValue *
        (purityRule.makingChargePercent / 100);

    // Final calculated gold price
    const finalPrice = metalValue + makingCharge;

    return {
        metal: "gold",
        purity: normalizedPurity,

        netWeight: weight,
        goldRate: rate,

        metalValue,
        makingCharge,

        makingChargePercent:
            purityRule.makingChargePercent,

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

