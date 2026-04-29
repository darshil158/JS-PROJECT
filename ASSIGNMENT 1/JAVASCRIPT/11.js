// Write a program to perform all arithmetic operations on two numbers.


let a = 10;
let b = 5;
let add = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
let exp = a ** b;
let mod = a % b;
a++;   b++;
let incr1 = a;
let incr2 = b;
a = 10;  b = 5;  a--;   b--;
let dcr1 = a;
let dcr2 = b;
a = 10;  b = 5;

console.log(`Number 1 :- ${a}`);
console.log(`Number 2 :- ${b}`);
console.log(`Addition of ${a} + ${b} :- ${add}`);
console.log(`Subtraction of ${a} - ${b} = ${sub}`);
console.log(`Multiplication of ${a} * ${b} = ${mult}`);
console.log(`Division of ${a} / ${b} = ${div}`);
console.log(`Exponentiation of ${a} ** ${b} = ${exp}`);
console.log(`Modulus of ${a} % ${b} = ${mod}`);
console.log(`Increment of ${a} = ${incr1}`);
console.log(`Increment of ${b} = ${incr2}`);
console.log(`Decrement of ${a} = ${dcr1}`);
console.log(`Decrement of ${b} = ${dcr2}`);


/* Number 1 :- 10
Number 2 :- 5
Addition of 10 + 5 :- 15
Subtraction of 10 - 5 = 5
Multiplication of 10 * 5 = 50
Division of 10 / 5 = 2
Exponentiation of 10 ** 5 = 100000
Modulus of 10 % 5 = 0
Increment of 10 = 11
Increment of 5 = 6
Decrement of 10 = 9
Decrement of 5 = 4 */ 
