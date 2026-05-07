"use strict";
/* 5. Multiplication Table with Condition
Write a program that:

Prints the table of a number (e.g., 5)
If the number is negative → show "Invalid Input."
Use for loop + if */
let num = -5;
let i;
if (num < 0) {
    console.log("Invalid Output !!! Enter the Positive Number.");
}
else {
    console.log('====================================');
    for (i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
    console.log('====================================');
}
/* S E:\RNW\JS-TS\ASSIGNMENT\ASSIGNMENT 2\TYPESCRIPT> node .\5.ts
====================================
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
====================================

PS E:\RNW\JS-TS\ASSIGNMENT\ASSIGNMENT 2\TYPESCRIPT> node .\5.ts
Invalid Output !!! Enter the Positive Number. */ 
