
"use strict";

const apiData = [
    "25", "true", "false", "NaN", " ",
    "100px", "3.14", null, undefined
];

let validNumbers = [];
let invalidData = [];

for (let i = 0; i < apiData.length; i++) {

    let value = apiData[i];

    // Convert into different data types
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    console.log("Original Value:", value);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    // Check invalid numeric values
    if (
        value === null ||
        value === undefined ||
        String(value).trim() === "" ||
        Number.isNaN(numberValue)
    ) {
        invalidData.push(value);
        console.log("Status: Invalid Number");
    }
    else {
        validNumbers.push(numberValue);
        console.log("Status: Valid Number");
    }

    console.log("--------------------");
}

console.log("Valid Numeric Data:", validNumbers);
console.log("Invalid Data:", invalidData);
