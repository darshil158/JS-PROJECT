"use strict";
/* 8. Palindrome Number
Write a program that:

Checks if a number is a palindrome
Example:
121 → Palindrome
123 → Not a palindrome
Use a loop + condition */
let num = 121;
let rev = 0;
let lastDigit;
console.log(`Original Number :- ${num}`);
while (num > 0) {
    lastDigit = num % 10;
    rev = (rev * 10) + lastDigit;
    num = (num / 10) | 0;
}
console.log(`Reversed Number :- ${rev}`);
num = 121;
if (num == rev) {
    console.log('====================================');
    console.log(`${num} is a Palindrome`);
    console.log('====================================');
}
else {
    console.log('====================================');
    console.log(`${num} is not a Palindrome`);
    console.log('====================================');
}
/* PS E:\RNW\JS-TS\ASSIGNMENT\ASSIGNMENT 2\TYPESCRIPT> node .\8.ts
Original Number :- 1234
Reversed Number :- 4321
====================================
1234 is not a Palindrome
====================================


PS E:\RNW\JS-TS\ASSIGNMENT\ASSIGNMENT 2\TYPESCRIPT> node .\8.ts
Original Number :- 121
Reversed Number :- 121
====================================
121 is a Palindrome
==================================== */ 
