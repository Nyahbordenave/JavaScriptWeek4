// This the created array for ages == Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array.Do not use numbers to reference the last element, find it programmatically.ages[7] - ages[0] is not allowed! Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).Use a loop to iterate through the array and calculate the average age.
let ages= [ 3, 9, 23, 64, 2, 8, 28, 93]
// to subtract the first element from the last without using numbers / usually to reference elements, use ages[0] and ages[7] but we cannot use it // referencing the last index 
let lastIndex= ages [ages.length -1];
let firstIndex = ages[0]; // setting values for both first index and last index 

let result= ages[ages.length -1] - ages[firstIndex]

console.log("result:", result)// result of subtraction of last index and firt index 

let brandNewAge = 50; 
ages.push(50); // created a new age and added it to the ages array
 
result = ages [ages.length-1] - ages [firstIndex]; 
console.log ("The result with new age added is:", result); 
// repeated subtraction to locate updated array 

let ageSum = 0; // need to set a value for sum 
for (let i =0; i < ages.length; i++) {
  ageSum += ages[i]; 
}
let newAverageAge = ageSum / ages.length; 
console.log (" The average age is:", newAverageAge); // implement the solution to locate the average of the 



// Below is problem 2 == Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.Use a loop to iterate through the array and calculate the average number of letters per name.Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names=["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; // This is the names array that was requested 
let totalLetters =0; // need to set a value to totalLetters of all of the names in the array

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
  }
let averageLetters= totalLetters/names.length; // created loop to calculate the average by dividing the total letters in the array by the amount of names

console.log("The average letters per name in this array: ", averageLetters); // the result 

let namesConcatenated = " ";
 
// created a new variable for the concatenated names, used empty space, since a space was requested inbetween each name

for (let n=0; n < names.length; n++) {
    namesConcatenated += names[n] + " ";
}
console.log ("The concatenated names:", namesConcatenated);

// Below is problem 3 == How do you access the last element of any array?


// To access the last element of an array, you can either reference the name of the array and the placement of the element. (EX: if array named dogs is 7 digits long, you can reference that element as DOGS [6]) Another way to reference the last element is using the dot methodm then subtracting the length by 1 since the array starts at 0. (EX: array named dogs is 7 digits long, dogs.length -1)

// Below is problem 4  == How do you access the first element of any array?

// To access the first element of an array, you would have to referene the placement 0. (EX: newArray [0])

// Below is problem 5 == Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let newNames= ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];  // I created an array of names 
let newNameLengths = []; // This is an array of the lenght of the names 
for (let i = 0; i < newNames.length; i++) {
    newNameLengths.push(names[i].length);
} // This is the code to reiterate the newNames array and add the lengths in their place instead. 
 console.log ("The Name Lengths:", newNameLengths); 

 // Below is Problem 6 == Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.


 let namesLengths = [3, 5, 3, 5, 4, 3]; 
 // previously created nameLengths array 
let sum=0; // need to assign the sum to a value
for (let i = 0; i < namesLengths.length; i++) {
    sum += namesLengths[i];
  } // for loop to add the total amount of elements in the array together. 
console.log ("The sum of the name lengths:", sum);

// Below is Problem 7 == Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').


function concatenateExample (word,n) {
    return word.repeat(n); 
} // need to create function and set value and request for word to be repeated

let exampleFunction = concatenateExample ("Welcome", 5); 
console.log(exampleFunction); 


// Below is Problem 8 == Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.


 let createFullName = (firstName, lastName) => firstName + " " + lastName // Created an arrow function that can concatenate both first   and last name to create a full name, including a space 
console.log (createFullName ("Selah", "Winrow"));  

 // Below is Problem 9 == Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

 let randomNumberArray = [58, 72, 12, 49, 88] // random array of numbers I created
 function totalMoreThan100(numbers) { // created function names totalMoreThan100
  
    let sum = numbers.reduce(function (acc, current) {
      return acc + current;
    }, 0);
return sum >100;  
}

 result = totalMoreThan100 (randomNumberArray); 
 console.log (result); // should return true since total is above 100 

// Below is Problem 10 == Write a function that takes an array of numbers and returns the average of all the elements in the array.


function averageCalculatedForNumbersArray (numbersArray) {
let = numbersArray = [2, 18, 47, 95]; // created new numbers array within a new function 

let numbersArraySum = numbersArray.reduce ((accumulator, currentValue) => accumulator + currentValue, 0); // using the reduce method to calculate sum 

let numbersArrayAverage = numbersArraySum / numbersArray.length; 
 return numbersArrayAverage;
} // calculations to locate average of array // ending block of function, will need to reiterate numbersArray outside of block so result can be found 

let = numbersArray = [2, 18, 47, 95];
    let numbersArrayResult = averageCalculatedForNumbersArray (numbersArray); console.log ("The average is:", numbersArrayResult) // calculated average of new function I created 

// Below if Problem 11 == Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function averageOfTwoArrays () {

  let firstArray = [2, 8, 10, 82, 100]; // first array of random numbers 
  let secondArray = [3, 6, 15, 20]; // second array of random numbers 

  let firstArraySum =  firstArray.reduce ((accumulator, currentValue) => accumulator + currentValue, 0); // calculating sum of first array
  
  let secondArraySum = secondArray.reduce ((accumulator, currentValue) => accumulator + currentValue, 0); // calculating sum of second array 

    let firstArrayAverage= firstArraySum / firstArray.length; // calculating average by dividings sum by the amount of elements in first array  
    let secondArrayAverage = secondArraySum / secondArray.length; // calculating average by dividings sum by the amount of elements in first array  

    return firstArrayAverage > secondArrayAverage;  // set up for boolean question to return true
  }
  let firstArray = [2, 8, 10, 82, 100]; // first array of random numbers == reestablishing outside of funtion 
  let secondArray = [3, 6, 15, 20]; // second array of random numbers == re-establishing outside of funtion 

let arrayAverage = averageOfTwoArrays (firstArray, secondArray); 
console.log ( "The first array has a greater average than the second array", arrayAverage); 


// Below is Problem 12 == Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
} // establish that is hot outside needs to be true AND would need to have more than $10.50 
let isHotOut = true;
let moneyInPocket = 11.00; // setting values to run as example

let willBuy = willBuyDrink(isHotOut, moneyInPocket);
// establishing return
console.log(willBuy);

 

  



