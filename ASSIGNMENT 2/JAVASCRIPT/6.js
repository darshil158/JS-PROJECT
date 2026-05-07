"use strict";
/* 6. Count Positive, Negative & Zero
Write a program that:

Uses a loop to check numbers from -10 to 10
Count:
Positive numbers
Negative numbers
Zeros
Use for loop + if-else */
let num;
for (num = -10; num <= 10; num++) {
    if (num < 0) {
        console.log(`${num} is Negative`);
    }
    else if (num == 0) {
        console.log(`${num} is Zero`);
    }
    else if (num > 0) {
        console.log(`${num} is Positive`);
    }
    else {
        console.log(`${num} is Not a Number`);
    }
}
/* PS E:\RNW\JS-TS\ASSIGNMENT\ASSIGNMENT 2\TYPESCRIPT> node .\6.ts

-10 is Negative
-9 is Negative
-8 is Negative
-7 is Negative
-6 is Negative
-5 is Negative
-4 is Negative
-3 is Negative
-2 is Negative
-1 is Negative
0 is Zero
1 is Positive
2 is Positive
3 is Positive
4 is Positive
5 is Positive
6 is Positive
7 is Positive
8 is Positive
9 is Positive
10 is Positive */ 
