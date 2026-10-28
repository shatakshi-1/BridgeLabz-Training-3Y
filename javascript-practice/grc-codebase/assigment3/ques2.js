
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let employee of employees) {

    try {

        // Check missing properties
        if (
            !employee ||
            employee.name == null ||
            employee.salary == null ||
            employee.years == null
        ) {
            throw new Error("Missing employee details");
        }

        // Convert strings to numbers
        let salary = Number(employee.salary);
        let years = Number(employee.years);

        // Validate converted values
        if (
            !Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 ||
            years < 0
        ) {
            throw new Error("Invalid salary or experience");
        }

        // Calculate bonus
        let bonus;

        if (years > 3) {
            bonus = salary * 0.10;
        }
        else {
            bonus = salary * 0.05;
        }

        let totalSalary = salary + bonus;

        console.log(`
Employee: ${employee.name}
Salary: ${salary}
Experience: ${years} years
Bonus: ${bonus}
Total Salary: ${totalSalary}
-------------------------
`);

    }
    catch (error) {
        console.log("Error:", error.message);
    }
}
