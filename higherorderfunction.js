// Higher Order function Exercise:

// Filter Even Numbers: Use filter to create a function that returns an array of even numbers from a given array.

// Capitalize Names: Write a function using map that takes an array of names and returns them all capitalized.

// Find Total Score: Use reduce to write a function that calculates the total score from an array of individual scores.

// Custom Sort: Write a higher-order function that takes an array and a sorting function as arguments. The sorting function should determine the order of the elements in the returned array.

// Multiply and Filter: Create a function that uses both map and filter to multiply each number by 2 in an array and then filter out numbers greater than 10.

// Count Words: Utilize reduce to count the occurrence of each word in an array of words, returning an object with words as keys and their counts as values.

// Composite Function: Write a higher-order function that takes two functions as arguments. This function should return a new function that, when called, calls the first function and passes its result to the second function.

functions that create new functions or use functions as arguments are called higher-order functions.
// Example:
function greaterThan(n) {
    return m => m > n;
} 
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // true