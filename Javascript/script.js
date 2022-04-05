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

