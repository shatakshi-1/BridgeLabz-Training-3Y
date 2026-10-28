
// Marks of five subjects
let marks = [90, 85, 78, 88, 92];

let total = 0;
let hasFailed = false;

// Calculate total and check minimum marks
for (let i = 0; i < marks.length; i++) {

    total += marks[i];

    // Student must score at least 35 in every subject
    if (marks[i] < 35) {
        hasFailed = true;
    }
}

// Calculate average and percentage
let average = total / marks.length;

let percentage = (total / 500) * 100;

console.log("Total Marks:", total);
console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

// Check promotion status
if (hasFailed || percentage < 50) {
    console.log("Detained");
}
else if (percentage >= 85) {
    console.log("Promoted with Distinction");
}
else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
}
