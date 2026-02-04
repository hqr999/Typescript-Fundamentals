function calculateDiscount(price: number): number {
  const hasDiscount = true;

  if (hasDiscount) {
    return price;
  }

  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);
