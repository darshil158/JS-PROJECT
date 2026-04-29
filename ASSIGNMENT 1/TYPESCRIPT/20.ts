/* Write a program to convert minutes into hours and minutes.*/

let min: number = 135;
let hr: number;
let rMin: number;

hr = min / 60;
rMin = min % 60;

console.log("Minutes :- " + min + " min");
console.log("Hours :- " + hr + " hr");
console.log("Remaining Minutes :- " + rMin + " min");