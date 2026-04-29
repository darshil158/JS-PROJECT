// Write a program to swap two numbers without using third variable.

let a:number = 5;
let b:number = 10;

console.log("Before Swapping: a = " + a + ", b = " + b);

a = a + b;
b = a - b;
a = a - b;

console.log("After swapping: a = " + a + ", b = " + b);