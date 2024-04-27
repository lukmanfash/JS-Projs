
// https://leetcode.com/problems/two-sum/Steps• Write at least 3 example uses of the function / program, complete with output expectations
// • Write the function signature matching the use cases
// • Write pseudocode of your minimum intuition
// • Turn it into code
// • Repeat last two steps
// • Remember to keep it simple and test the logic by reading/running your code in your head

//1) https://leetcode.com/problems/score-of-a-string/description/ 
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s
// function scoreOfString(s) {
//     let score = 0;
//     for (let i = 0; i < s.length - 1; i++) {
//         score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
//     }
//     return score;
// };

// // const inputString = "hello";  // score = 2
// // const inputString = "zaz";     // // score = 50
// const inputString = "canada"; // score = 34
// const score = scoreOfString(inputString);
// console.log("Score:", score);

//  2) https://leetcode.com/problems/valid-parentheses/description/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string.
// An input string is valid if:
// 1.	Open brackets must be closed by the same type of brackets.
// 2.	Open brackets must be closed in the correct order.
// 3.	Every close bracket has a corresponding open bracket of the same type.


// function isValid(s) {
//     let stack = [];
//     let brackets = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };

//     for (let char of s) {
//         if (brackets[char]) {
//             stack.push(brackets[char]);
//         } else {
//             if (stack.pop() !== char) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// }
// Example 1: 
// const inputString = "{[()]}";
// Example 2:
// const inputString = "()[]{}" //Output: true
// Example 3:
// const inputString = "(]" // Output: false

// console.log("Is the input string valid?", isValid(inputString));


// 3: https://leetcode.com/problems/merge-strings-alternately/description/
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// function mergeStrings(word1, word2) {
//     let merged = '';
//     let i = 0;
//     let j = 0;

//     // Iterate over both strings simultaneously
//     while (i < word1.length || j < word2.length) {
//         // Append a character from word1 if available
//         if (i < word1.length) {
//             merged += word1[i];
//             i++;
//         }
//         // Append a character from word2 if available
//         if (j < word2.length) {
//             merged += word2[j];
//             j++;
//         }
//     }

//     return merged;
// }

// Example 1:
// const word1 = "abc"; 
// const word2 = "pqr"; // Output: "apbqcr"

// Example 2:
// const word1 = "ab"; 
// const word2 = "pqrs"; // "apbqrs"

// Example 3:
// const word1 = "abcd"; 
// const word2 = "pq"; // Output: "apbqcd"

// console.log("Merged string:", mergeStrings(word1, word2));



// 2) https://leetcode.com/problems/two-sum/description/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.



function twoSum(nums, target) {
    const indicesMap = {}; // Hashmap to store indices of elements
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement
        
        // Check if the complement exists in the hashmap
        if (indicesMap.hasOwnProperty(complement)) {
            // Return the indices of the two numbers that add up to the target
            return [indicesMap[complement], i];
        }
        
        // Store the index of the current number in the hashmap
        indicesMap[nums[i]] = i;
    }
    
    // If no solution is found, return an empty array
    return [];
}

// Example 1:
const nums = [2,7,11,15];
const target = 9;      //Output: [0,1]


// Example 2:
// const nums = [3,2,4];
// const target = 6;      //Output: [1,2]

// Example 3:
// const nums = [3,3];
// const target = 6;   //Output: [0,1]

console.log("Indices of the two numbers:", twoSum(nums, target)); // Output: [0, 1] (since nums[0] + nums[1] = 2 + 7 = 9)
