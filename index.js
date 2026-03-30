function calculateTax(amount) {
  return amount * 0.10;
}


function convertToUpperCase(text) {
  return String(text).toUpperCase();
}

function findMaximum(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}

function isPalindrome(word) {
  const str = String(word);
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice * (1 - discountPercentage / 100);
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };