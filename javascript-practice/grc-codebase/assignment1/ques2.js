
// Variables of different data types

let userName = "Shatakshi";
let age = 20;
let isStudent = true;
let skills = ["HTML", "CSS", "JavaScript"];
let student = { name: "Shatakshi", course: "B.Tech" };
let emptyValue = null;
let unknownValue;

// Create a formatted report
let report = [
    {
        Label: "Name",
        Value: userName,
        Type: typeof userName
    },
    {
        Label: "Age",
        Value: age,
        Type: typeof age
    },
    {
        Label: "Student",
        Value: isStudent,
        Type: typeof isStudent
    },
    {
        Label: "Skills",
        Value: skills,
        Type: Array.isArray(skills) ? "array" : typeof skills
    },
    {
        Label: "Student Details",
        Value: student,
        Type: typeof student
    },
    {
        Label: "Empty Value",
        Value: emptyValue,
        Type: typeof emptyValue
    },
    {
        Label: "Unknown Value",
        Value: unknownValue,
        Type: typeof unknownValue
    }
];

// Display all values using one console.table()
console.table(report);
