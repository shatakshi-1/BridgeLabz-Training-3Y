
// Monthly expenses for five categories

let expenses = [3000, 1500, 8000, 2000, 2500];

// Calculate total expenses
let total = 0;

for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

// Calculate average
let average = total / expenses.length;

// Add 10% tax using assignment operator
let finalAmount = total;
finalAmount += total * 0.10;

// Display results
console.log("Total Expenses: Rs.", total.toFixed(2));

console.log("Average Expense: Rs.", average.toFixed(2));

console.log("Final Amount After 10% Tax: Rs.",
    finalAmount.toFixed(2));
