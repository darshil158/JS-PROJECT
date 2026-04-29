/* Write a program to check student grade based on marks:
80 and above = A
60 to 79 = B
below 60 = C */

let marks:number = 90;

console.log("Marks :- " + marks);

if(marks >= 80 && marks <= 100) {
    console.log("Grade :- A");
}
else if(marks >= 60 && marks < 80) {
    console.log("Grade :- B");
}
else if(marks >= 0 && marks < 60) {
    console.log("Grade :- C");
}
else {
    console.log("Invalid Marks Entered. Please enter marks between 0 and 100.");
}