
// Citizen details
let age = 20;
let isCitizen = true;

// Check citizenship
if (isCitizen) {

    // Check age eligibility
    if (age >= 18 && age <= 20) {

        console.log("Eligible to vote only.");

    }
    else if (age >= 21) {

        console.log("Eligible for all services.");

    }
    else {

        console.log("Not eligible yet.");

    }

}
else {

    // Check age for non-citizens
    if (age >= 18) {

        console.log("Only age criteria met.");

    }
    else {

        console.log("Not eligible yet.");

    }

}
