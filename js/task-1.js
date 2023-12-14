function makeTransaction(quantity, pricePerDroit) {
  return quantity * pricePerDroit;
}

const result1 = `You ordered 5 droids worth ${makeTransaction(
  5,
  3000
)} credits!`;

const result2 = `You ordered 5 droids worth ${makeTransaction(
  3,
  1000
)} credits!`;

const result3 = `You ordered 5 droids worth ${makeTransaction(
  10,
  500
)} credits!`;

console.log(result1);
console.log(result2);
console.log(result3);
