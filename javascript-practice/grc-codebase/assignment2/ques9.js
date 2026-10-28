
// Array to store numbers
let numbers = [];

// Add numbers from 1 to 30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

// Array to store results
let results = [];

// Check every number
for (let number of numbers) {

    let result;

    // Check divisibility by both 3 and 5
    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    }
    else if (number % 2 === 0) {
        result = "Even";
    }
    else {
        result = "Odd";
    }

    // Store result in a new array
    results.push({
        Number: number,
        Result: result
    });
}

// Display complete report
console.table(results);
