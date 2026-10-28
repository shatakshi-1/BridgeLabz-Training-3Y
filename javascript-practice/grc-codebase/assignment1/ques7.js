
// Generate random number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// User's test guess
let userGuess = 25;

console.log("Your Guess:", userGuess);

// Check the guessed number
if (userGuess === secretNumber) {

    console.log("Correct guess!");

}
else {

    // Check if guess is within +/- 3
    if (Math.abs(userGuess - secretNumber) <= 3) {

        console.log("Very close!");

    }
    else if (userGuess > secretNumber) {

        console.log("Too high");

    }
    else {

        console.log("Too low");

    }
}

console.log("Secret Number:", secretNumber);
