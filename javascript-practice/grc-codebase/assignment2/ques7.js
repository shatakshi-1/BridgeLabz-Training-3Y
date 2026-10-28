
// Customer feedback
let feedback = "Great product! Fast delivery and amazing sound quality!";

// Remove extra spaces
let cleanedFeedback = feedback.trim();

// Count total words
let words = cleanedFeedback.split(/\s+/);

let wordCount = words.length;

// Convert feedback to lowercase
let lowerFeedback = cleanedFeedback.toLowerCase();

// Check for negative words
let hasNegativeWords = lowerFeedback.includes("bad") ||
                       lowerFeedback.includes("poor");

// Display feedback report
console.log("Customer Feedback:", cleanedFeedback);

console.log("Total Words:", wordCount);

// Determine feedback type
if (hasNegativeWords) {
    console.log("Needs Improvement");
}
else {
    console.log("Positive Feedback");
}
