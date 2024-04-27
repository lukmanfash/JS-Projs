// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Test case: Addition of two numbers
function testAddition() {
  let expected = 8;
  let result = add(3, 5);
  console.log("Test Case: Addition of 3 and 5");

  if (result === expected) {
    console.log("Result:", result);
    console.log("Expected:", expected);
    console.log("Test Passed: Addition is correct.");
    return true;
  } else {
    console.error("Result:", result);
    console.error("Expected:", expected);
    console.error("Test Failed: Addition is incorrect.");
    return false;
  }
}

// Run the test case
testAddition();


// Exercises:


// Exercise 1:

//     Write a function that takes in two parameters of expected and result. The function returns console.log with true if it matches, else it returns false




// Exercise 2: Simple Comparison Testing

//     Write a function that adds two numbers and returns the result. Use testResult function to verify that the result matches the expected outcome for different input values.
const add= function addTwonumbs(a, b) {
  const result = a + b;
  console.log(result)
}

function testResult (result, expected) {
  if (result === expected

}

// Exercise 3: String Comparison Testing

//     Develop a function that concatenates two strings. Use testResult function to compare the concatenated string with the expected result for various string inputs.


// Exercise 4: Array Comparison Testing

//     Create a function that sorts an array of numbers in ascending order. Also, create a function called testArray similar to testResult which validates array. Use that function to match the expected outcome for different input arrays.


// Exercise 5: Error Handling Testing

//     Write a function that divides two numbers. Test the function using console.log to verify that it properly handles division by zero scenarios and returns the expected result for valid divisions.


// Exercise 6: Conditional Testing

//     Create a function that determines whether a given number is prime. Test the function with console.log to verify that it correctly identifies prime numbers and non-prime numbers.


// Exercise 7: Edge Case Testing

//     Write a function that calculates the factorial of a given number. Test the function using console.log to ensure it handles edge cases, such as factorial of zero, properly.



