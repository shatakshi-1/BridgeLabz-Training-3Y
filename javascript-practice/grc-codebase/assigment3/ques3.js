
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let i = 0; i < transactions.length; i++) {

    try {

        let transaction = transactions[i];

        // Check null entries
        if (transaction === null) {
            throw new Error("Null Transaction");
        }

        // Check missing properties
        if (
            transaction.id === undefined ||
            transaction.amount === undefined
        ) {
            throw new Error("Missing ID or Amount");
        }

        // Check negative amount
        if (transaction.amount < 0) {
            throw new Error("Negative Amount");
        }

        // Check valid numeric amount
        if (
            typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)
        ) {
            throw new Error("Invalid Amount");
        }

        // Add valid transaction
        valid.push(transaction);

        console.log("Valid Transaction:", transaction);

    }
    catch (error) {

        invalid.push({
            transaction: transactions[i],
            reason: error.message
        });

        console.log("Error:", error.message);
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);

console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);
