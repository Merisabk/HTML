// USE STRICT and CONSOLE
// use strict: forces us to write secure javaScript. stops us using protected words, accidentaly making global variables etc. 
//`use strict` 
let myVar =1;

console.log(`Hello World`);
console.info(`this is info`);
console.warn(`this is a warning`);
console.error(`this is an error msd`);
console.log(`%c` + `some text`, `color:black; background-color:white; font-size:30px; padding:15px;`);

console.log(`%c` + `red text` + `%c` + `blue text`, `color:red;`, `color:blue; `);

// Exercises
console.log(`firstname`);
console.log(`secondname`);
console.log(`where are you from?`);
console.log(`star sign`);

let make = `Audi`;
let model = `A5`;

console.log(`My Favourtie car is ` + make +` and the model is ` + model + `.`);

console.log(`%c` + `This is a red text`, `color:red; font-family:fantasy; font:bold; background-color:black, padding: 10px;`);


//ITERATION EXERCISE
let A = 100;
for (let A = 100; A<=200; A++) {
    A++;
    console.log(A++);
}

let B = 100;
for (let B = 100; B <= 200; B++) {
    if (B % 2 == 0){
        console.log(`-`);
    } else {
        console.log(`*`);
    }
    }

// create a method that can print out the numbers 1-10 10 times each 
for(let i = 1; i <= 10; i++){
    for (let j=1; j <=10; j++)
    console.log(j);
}


// Create a IF statement that satifies the following:
//Declare a variable age
// Write a condition that checks if age is between 18 AND 65
// Return a value in each case where the condition is satisfied and not satisfied.
// Extra: Consider the case where age is less than 18 - return 'underage'.


let age = 60;
if (age >= 18 && age <= 65) {
console.log(`You are between 18 and 65`) }
else if  (age < 18) {
        console.log(`You are uderage`)
    } else {
        console.log(`You are over 65`)
    }

 //Using ternary-if syntax, write code that checks if age is above 50.
let over50 = (age >= 50 ? "over 50" : "under 50" );
console.log(over50);
