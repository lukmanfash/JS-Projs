// Here is an example:

const pets = ['cat', 'dog', 'elephant']

const filtered = pets.filter(function (pet) {
  return (pet !== 'elephant')
})


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = numbers.filter(number => number % 2 === 0);
console.log(filtered);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filtered = numbers.filter(function (number) {
//   return (number % 2) === 0
// })

// console.log(filtered)