
// Create an array of 8 random scores
let scores = [];

for (let i = 0; i < 8; i++) {

    let randomScore = Math.floor(Math.random() * 71) + 30;

    scores.push(randomScore);
}

// Use map() to prepare student-wise report
let studentReport = scores.map((score, index) => {
    return {
        Student: index + 1,
        Score: score
    };
});

// Find highest and lowest score
let highestScore = Math.max(...scores);

let lowestScore = Math.min(...scores);

// Calculate total using reduce()
let total = scores.reduce((sum, score) => sum + score, 0);

// Calculate average
let average = total / scores.length;

// Count students who passed
let passedStudents = scores.filter(score => score >= 50).length;

// Display results
console.table(studentReport);

console.log("Highest Score:", highestScore);

console.log("Lowest Score:", lowestScore);

console.log("Average Score:", average.toFixed(2));

console.log("Students Passed:", passedStudents);

console.log("Students Failed:", scores.length - passedStudents);
