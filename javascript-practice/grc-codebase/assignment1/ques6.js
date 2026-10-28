
// Enter purchase amount
let purchaseAmount = 7500;

let discountPercentage = 0;

// Determine discount based on purchase amount
if (purchaseAmount >= 10000) {
    discountPercentage = 25;
}
else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
}
else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
}
else {
    discountPercentage = 0;
}

// Calculate discount amount
let discountAmount = purchaseAmount * discountPercentage / 100;

// Calculate final price
let finalPrice = purchaseAmount - discountAmount;

// Round the final price
finalPrice = Math.round(finalPrice);

// Display results
console.log("Original Total: Rs.", purchaseAmount);

console.log("Discount Percentage:", discountPercentage + "%");

console.log("Discount Amount: Rs.", discountAmount);

console.log("Final Price: Rs.", finalPrice);
