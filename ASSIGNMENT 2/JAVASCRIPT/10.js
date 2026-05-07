"use strict";
/* 10. Number Pattern Program
Write a program that:

Prints pattern:
1
12
123
1234
12345

Use nested loops
*/
let i;
let j;
let n = "";
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        n = n + j;
    }
    n = n + "\n";
}
console.log(n);
/* PS E:\RNW\JS-TS\ASSIGNMENT\ASSIGNMENT 2\TYPESCRIPT> node .\10.ts
1
12
123
1234
12345 */ 
