const sumOfTwoNumbs = (numbs1, numbs2) => {
    return numbs1 + numbs2;
};
// console.log(sumOfTwoNumbs(10, 20)); // 30

const sumOfThreeNumbers = (number1, number2, number3) => {
    const sumOfFirstTwoNumbers = number1 + number2   // 70
    return sumOfFirstTwoNumbers + number3;   // 120
};
console.log(sumOfThreeNumbers(30, 40, 50)); // 120



// write a Sum function for any number of arguments.  (not passing an array). if an array(two functions)
// happy path:
// vary the  number of arguments: 3 args, 