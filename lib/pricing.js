const PRICING_RULES = {
    gold: {
        makingChargePercent: 8.99,
    },

    silver: {
        makingChargePerGram: 60,
    },

    diamond: {
        makingChargePerGram: 2500,
    },
};

export function calculateGoldPrice({
    netWeight,
    goldRate,
    stoneWeight = 0,
    stoneCharge = 0,
}) {
    const weight = Number(netWeight);
    const rate = Number(goldRate);

    if (!weight || !rate) {
        return null;
    }

    const goldValue = weight * rate;

    const makingCharge =
        goldValue * (PRICING_RULES.gold.makingChargePercent / 100);

    const basePrice = goldValue + makingCharge;

    const finalPrice = basePrice + Number(stoneCharge || 0);

    return {
        metal: "gold",
        purity: "22k",
        netWeight: weight,
        goldRate: rate,
        metalValue: goldValue,
        makingCharge,
        stoneWeight: Number(stoneWeight || 0),
        stoneCharge: Number(stoneCharge || 0),
        finalPrice,
    };
}

export function calculateSilverPrice({
    netWeight,
    silverRate,
    stoneCharge = 0,
}) {
    const weight = Number(netWeight);
    const rate = Number(silverRate);

    if (!weight || !rate) {
        return null;
    }

    const silverValue = weight * rate;

    const makingCharge =
        weight * PRICING_RULES.silver.makingChargePerGram;

    const basePrice = silverValue + makingCharge;

    const finalPrice = basePrice + Number(stoneCharge || 0);

    return {
        metal: "silver",
        netWeight: weight,
        metalValue: silverValue,
        makingCharge,
        stoneCharge: Number(stoneCharge || 0),
        finalPrice,
    };
}

export function calculateDiamondPrice({
    netWeight,
    diamondRate,
    stoneCharge = 0,
}) {
    const weight = Number(netWeight);
    const rate = Number(diamondRate);

    if (!weight || !rate) {
        return null;
    }

    const diamondValue = weight * rate;

    const makingCharge =
        weight * PRICING_RULES.diamond.makingChargePerGram;

    const basePrice = diamondValue + makingCharge;

    const finalPrice = basePrice + Number(stoneCharge || 0);

    return {
        metal: "diamond",
        netWeight: weight,
        metalValue: diamondValue,
        makingCharge,
        stoneCharge: Number(stoneCharge || 0),
        finalPrice,
    };
}
