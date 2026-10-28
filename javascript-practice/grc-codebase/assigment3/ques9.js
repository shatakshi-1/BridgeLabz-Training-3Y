
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let errors = [];

for (let i = 0; i < rawData.length; i++) {

    try {

        // Convert JSON string into object
        let data = JSON.parse(rawData[i]);

        // Check required properties
        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age");
        }

        // Convert age into number
        data.age = Number(data.age);

        if (!Number.isFinite(data.age) || data.age < 0) {
            throw new Error("Invalid age");
        }

        // Filter users below 18
        if (data.age < 18) {
            throw new Error("User is under 18");
        }

        // Store valid data
        cleanData.push(data);

        console.log("Valid Entry:", data);

    }
    catch (error) {

        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("Clean Data:", cleanData);
console.log("Error Report:", errors);
