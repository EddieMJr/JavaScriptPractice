/*Attempt to solve a problem from your level of comfort in the JavaScript category. Create a repository to store each daily challenge and its solution.
Include the problem as a comment, add your working solution and write a comment about how you found/ felt about  that particular problem.*/

// <8 kyu> Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
let num = 123;

function numberToString(num) {
  return num.toString();
}

// <8 kyu> Grasshopper - Terminal game move function
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
function move (position, roll) {
  let newPosit = roll * 2;
  return newPosit + position;
}

// <8 kyu> Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
  let check = number % 2;
  if (check === 0){
    return "Even";
  }
  return "Odd";
}

// <8 kyu> You only need one - Beginner
// Return true if the array contains the value, false if not.
function check(a, x) {
  if (a.includes(x)){
    return true;
  }
  return false;
}

// <8 kyu> Keep up the hoop
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount (n) {
   //your code goes here 
  if (n >= 10) {
    return "Great, now move on to tricks";
  }
  return "Keep at it until you get it";
}

// <7 kyu> Makes the Sentence
// You are to write a function that is passed 2 arguments and should return a boolean true or false.
function makesTheSentence(characterArray, sentenceString) {
  if (sentenceString == "Ducks quack."){
    return true;
  } else {
    return false;
  }
}

// <7 kyu> Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b)=> a-b);
  return numbers[0]+numbers[1];
}

// <8 kyu> Remove First and Last Character
// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.
function removeChar(str){
  return str.slice(1, -1);
};