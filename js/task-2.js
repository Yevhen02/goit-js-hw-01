function getShippingMessage(country, price, deliveryFree) {
  return `Shipping to ${country} will cost ${price + deliveryFree} credits`;
}

const result1 = getShippingMessage("Australia", 120, 50);

const result2 = getShippingMessage("Germany", 80, 20);

const result3 = getShippingMessage("Sweden", 100, 20);

console.log(result1);
console.log(result2);
console.log(result3);
