/* 7. Reverse a Number
Write a program that:

Takes a number (e.g., 1234)
Reverses it using a loop
Output: 4321
Use while loop */

let num:number = 1234;
let rev:number = 0;
let lastDigit:number;

console.log(`Original Number :- ${num}`);

while(num > 0) {
    lastDigit = num % 10;
    rev = (rev * 10) + lastDigit;
    num = (num / 10) | 0;
}

console.log(`Reversed Number :- ${rev}`);

/* PS E:\RNW\JS-TS\ASSIGNMENT\ASSIGNMENT 2\TYPESCRIPT> node .\7.ts
Original Number :- 1234
Reversed Number :- 4321 */