
// Given number
let x = 16.75;

// Math operations
let roundedValue = Math.round(x);

let squareRoot = Math.sqrt(x);

let powerValue = Math.pow(x, 3);

// Generate random number between 10 and 50
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted summary using template literals
console.log(`
Math Utility Dashboard
-------------------------
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Power (x³): ${powerValue}
Random Number (10-50): ${randomNumber}
`);
