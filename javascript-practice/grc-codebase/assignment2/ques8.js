
// Shopping cart
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate original cart total
let originalTotal = cart.reduce((total, product) => {
    return total + product.price;
}, 0);

let discountedTotal = 0;

// Apply category-wise discounts
for (let product of cart) {

    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    }
    else if (product.category === "fashion") {
        discount = 5;
    }
    else {
        discount = 0;
    }

    // Calculate discounted product price
    let discountAmount = product.price * discount / 100;

    let finalProductPrice = product.price - discountAmount;

    discountedTotal += finalProductPrice;

    console.log(
        `${product.item}: Rs. ${finalProductPrice.toFixed(2)}`
    );
}

// Apply extra 5% discount if original cart total exceeds 50000
if (originalTotal > 50000) {
    discountedTotal -= discountedTotal * 0.05;
}

// Display final report
console.log("----------------------");

console.log("Original Total: Rs.", originalTotal.toFixed(2));

console.log("Final Total: Rs.", discountedTotal.toFixed(2));
