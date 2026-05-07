/* 4. Prime Number Checker
Write a program that:

Takes a number
Checks whether it is prime or not
Use a loop + condition */

let n: number = 7;
let isPrime: boolean = true;

if (n <= 1) {
    isPrime = false;
} 
else {
    let i: number = 2;
    while (i < n) {
        if (n % i === 0) {
            isPrime = false; 
        }
        i++;
    }
}

if (isPrime) {
    console.log(`${n} is a Prime Number`);
} else {
    console.log(`${n} is NOT a Prime Number`);
}


/* PS E:\RNW\JS-TS\ASSIGNMENT\ASSIGNMENT 2\TYPESCRIPT> node .\4.ts
7 is a Prime Number */