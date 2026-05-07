"use strict";
/* 9. Fibonacci Series with Limit
Write a program that:

Prints the Fibonacci series up to N terms
Example: 0, 1, 1, 2, 3, 5...
Use for loop */
let a = 0;
let b = 1;
let n = 10;
let i;
for (i = 1; i <= n; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}
/* PS E:\RNW\JS-TS\ASSIGNMENT\ASSIGNMENT 2\TYPESCRIPT> node .\9.ts
0
1
1
2
3
5
8
13
21
34 */ 
