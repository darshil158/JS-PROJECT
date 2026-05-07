/* 3. Factorial Program
Write a program that:

Takes a number (e.g., 5)
Calculates factorial using a loop
Use for or while
Example: 5! = 120
*/

let n:number = 5;
let i:number = 1;
let a:number = 1;

console.log(`Number :- ${n}`);

for(i = n; i != 0; i--) {
    console.log(i);
    a = a * i;
}

console.log(`Factorial of ${n} :- ${a}`);

/* Number :- 5
5
4
3
2
1
Factorial of 5 :- 120 */