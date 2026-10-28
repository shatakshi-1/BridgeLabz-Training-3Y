
// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {

    // Local variable
    let salary = 40000;

    if (isPermanent === true) {
        salary += bonus;
    }

    console.log("Permanent Employee:", isPermanent);
    console.log("Total Salary:", salary);
}

// Permanent employee
calculateSalary(true);

// Temporary employee
calculateSalary(false);

// Global bonus remains unchanged
console.log("Global Bonus:", bonus);
