
"use strict";

// Unique parameter names
function demo(a, b) {

    // Proper variable declaration
    let total = 10;

    console.log("First Parameter:", a);
    console.log("Second Parameter:", b);
    console.log("Total:", total);

    // Use object properties if deletion is required
    let data = {
        total: total
    };

    delete data.total;

    console.log("After Deletion:", data);
}

demo(5, 10);
