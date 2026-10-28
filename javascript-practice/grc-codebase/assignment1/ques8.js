
// Current annual salary
let currentSalary = 300000;

// Annual increment percentage
let incrementRate = 10;

// Store yearly salary details
let salaryReport = [];

// Calculate salary for the next five years
for (let year = 1; year <= 5; year++) {

    // Apply annual increment
    currentSalary += currentSalary * incrementRate / 100;

    // Round salary
    currentSalary = Math.round(currentSalary);

    // Add details to report
    salaryReport.push({
        Year: year,
        Salary: currentSalary
    });

}

// Display salary projection
console.table(salaryReport);
