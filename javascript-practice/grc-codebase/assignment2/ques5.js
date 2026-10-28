
// Smart home security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all security conditions
let isSecure = isAlarmOn &&
               isDoorLocked &&
               isWindowClosed &&
               isOwnerInside;

// Display result
if (isSecure) {
    console.log("Secure");
}
else {
    console.log("Unsafe");
}

// Change conditions to test another outcome
isDoorLocked = false;

// Using OR and NOT operators
if (!isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside) {
    console.log("Unsafe");
}
else {
    console.log("Secure");
}
