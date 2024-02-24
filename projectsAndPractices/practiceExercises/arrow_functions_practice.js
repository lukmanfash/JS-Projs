//Q1: Simple Greeting: Convert a function that returns "Good morning, world!" into an arrow function.
 function greetings() {
    return 'Good morning, World!';
}
greetings

// arrow function conversion:
const greetings_af = () => {
    return 'Good morning, World!'
}

greetings_af() // 'Good morning, World!'



//Q2: Double a Number: Create an arrow function doubleNumber that takes one number as input and returns its double.

const doubleAnumber = (number) => {
    return number*2;
}

doubleAnumber(25);// 50

//Q3: Sum It Up: Write an arrow function sum that takes two numbers and returns their sum.

const sumTwonumbers = (number1, number2) => {
    return number1 + number2;
}

sumTwonumbers(500, 1000); // 1500


//Q4: Maximum Finder: Craft an arrow function findMax that takes two numbers and returns the larger one.
const findMax = (numb1, numb2) => {
    if (numb1 - numb2 > 0) {           // or if (numb1 > numb2) {...
        return numb1;
    } else {
        return numb2;
    }
};
findMax(35, 45); // 45


// Q5: Personalized Greeting: Create an arrow function personalGreet that takes a person's name as input and returns a personalized greeting.
const personalGreet = (fName, lName) => {
    return `Hi there ${fName} ${lName}!`;
};
personalGreet('Justin', 'Trudeau'); // 'Hi there Justin Trudeau!'


// Q6: Age Calculator: Write an arrow function calculateAge that takes a birth year and returns the age based on the current year (let's say 2023 for simplicity).
const currentYear = 2023
const calculateAge = (yearOfbirth) => {
    return currentYear - yearOfbirth;
};
calculateAge (1990); // 33

//Q7: Even Number Filter: Use an arrow function with the filter method to make a function evenNumbersOnly that takes an array of numbers and returns an array of the even numbers.
const evenNumbersOnly = (array) => {
    return array.filter(number => number % 2 === 0);
};
evenNumbersOnly([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]); // [12, 14, 16, 18, 20]
