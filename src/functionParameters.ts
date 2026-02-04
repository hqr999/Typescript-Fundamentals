function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

let price2 = calculatePrice(200);

function calculateScore(initialSc: number, penaltyP: number = 0): number {
  return initialSc - penaltyP;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreAfterPenalty2 = calculateScore(300);
