/* Write a program to check whether a person is eligible for voting */

let age: number = 19;

console.log("Age of the Person :- " + age);

if (age >= 18) {
    console.log("The Person is eligible for Voting.");
} 
else if (age < 0) {
    console.log("Invalid Age Entered.");
}
else {
    console.log("The Person is Not Eligible for Voting.");
}