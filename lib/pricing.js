const PRICING_RULES = {
    gold: {
        purity: "22k",
        makingChargePercent: 8.99,
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