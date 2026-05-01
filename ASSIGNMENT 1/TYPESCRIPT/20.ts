/* Write a program to convert minutes into hours and minutes.*/

let min: number = 135;
let hr: number = 0;

while (min >= 60) {
    min = min - 60;  
    hr = hr + 1;     
}

console.log("Minutes :- " + min + " min");
console.log("Hours :- " + hr + " hr");
console.log("Remaining Minutes :- " + min + " min");
