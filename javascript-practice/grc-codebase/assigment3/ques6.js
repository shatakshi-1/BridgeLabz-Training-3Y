
"use strict";

// Default number of rows
let rows = 5;

// Optional browser input
if (typeof prompt === "function") {

    let userInput = prompt("Enter number of rows:", "5");

    if (userInput !== null && userInput.trim() !== "") {

        let enteredRows = Number(userInput);

        if (Number.isInteger(enteredRows) && enteredRows > 0) {
            rows = enteredRows;
        }
    }
}

// Outer loop controls rows
for (let i = 1; i <= rows; i++) {

    let pattern = "";

    // Inner loop prints stars
    for (let j = 1; j <= i; j++) {

        pattern += "* ";

    }

    console.log(pattern.trim());
}
