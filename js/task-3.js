function getElementWidth(content, padding, border) {
  return `Border-box with content ${content}, padding ${padding} and ${border} is equal to ${
    content + padding + border
  }`;
}

const result1 = getElementWidth("50px", "8px", "4px");
const result2 = getElementWidth("60px", "12px", "8.5px");
const result3 = getElementWidth("200px", "0px", "0px");

console.log(result1);
console.log(result2);
console.log(result3);
