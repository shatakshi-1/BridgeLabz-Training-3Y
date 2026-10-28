
// Generate two random numbers between 1 and 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Available arithmetic operators
let operators = ["+", "-", "*", "/"];

// Select a random operator
let randomIndex = Math.floor(Math.random() * operators.length);

let operator = operators[randomIndex];

let correctAnswer;

// Calculate answer using switch
switch (operator) {

    case "+":
        correctAnswer = num1 + num2;
        break;

    case "-":
        correctAnswer = num1 - num2;
        break;

    case "*":
        correctAnswer = num1 * num2;
        break;

    case "/":
        correctAnswer = (num1 / num2).toFixed(2);
        break;

    default:
        console.log("Invalid Operator");
}

// Display question and answer
console.log(`Question: ${num1} ${operator} ${num2} = ?`);

console.log(`Correct Answer: ${correctAnswer}`);
