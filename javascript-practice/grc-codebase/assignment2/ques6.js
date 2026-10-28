
// Initial counter value
let count = 0;

// Function to increase counter
function increment() {

    // Nested function
    function updateCount() {
        count++;
    }

    updateCount();

    console.log("Current Count:", count);
}

// Function to decrease counter
function decrement() {

    // Nested function
    function updateCount() {
        count--;
    }

    updateCount();

    console.log("Current Count:", count);
}

// Simulate button clicks
increment();
increment();
increment();

decrement();
decrement();
