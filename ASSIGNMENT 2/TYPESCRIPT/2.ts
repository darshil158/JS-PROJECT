/* 2. Sum of Even Numbers
Write a program that:

Finds the sum of all even numbers from 1 to 100
Use for loop + if
Display the result using console.log */

let a:number = 0;
for(let i:number = 0; i <= 100; i++) {
   if(i%2 == 0){
        console.log(i + " " );
        a = a + i;
   }
}
console.log(`Sum of All Even Numbers (1-100) :- ${a}`);


// Sum of All Even Numbers (1-100) :- 2550