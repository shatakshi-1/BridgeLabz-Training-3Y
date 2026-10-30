class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent) / 100;
    }
}

let employees = [
    new Employee(1, "Aman", "IT", 30000),
    new Employee(2, "Riya", "HR", 25000),
    new Employee(3, "Rahul", "Finance", 40000),
    new Employee(4, "Neha", "IT", 35000),
    new Employee(5, "Priya", "Sales", 28000)
];

employees[0].applyBonus(10);

employees.forEach(emp => {
    console.log(emp.name, "Annual Salary:", emp.getAnnualSalary());
});

let totalPayout = employees.reduce((total, emp) => {
    return total + emp.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", totalPayout);