
"use strict";

const operations = [
    "add", "divide", "power", "root", "subtract"
];

const num1 = 25;
const num2 = 0;

// Calculate result based on operation
function calculate(operation, a, b) {

    let result;

    switch (operation) {

        case "add":
            result = a + b;
            break;

        case "divide":

            if (b === 0) {
                throw new Error("Division by zero is not allowed");
            }

            result = a / b;
            break;

        case "power":
            result = Math.pow(a, b);
            break;

        case "root":

            if (a < 0) {
                throw new Error("Square root of negative number");
            }

            result = Math.sqrt(a);
            break;

        case "subtract":
            result = a - b;
            break;

        default:
            const error = new Error("Invalid operation");
            error.name = "InvalidOperationError";
            throw error;
    }

    return result;
}

// Perform all operations
for (let operation of operations) {

    try {

        let answer = calculate(operation, num1, num2);

        console.log(`${operation}: ${answer}`);

    }
    catch (error) {

        console.log(`${operation}: ${error.name} - ${error.message}`);

    }
}
