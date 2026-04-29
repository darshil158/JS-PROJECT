// Write a program to swap two numbers using third variable.

let a:number = 5;
let b:number = 10;
let c:number = 0;

console.log("Before Swapping: a = " + a + ", b = " + b);

c = a;
a = b;
b = c;

console.log("After swapping: a = " + a + ", b = " + b);