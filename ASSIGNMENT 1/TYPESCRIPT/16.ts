/* Write a program to calculate employee total salary using:
Basic salary
HRA = 10%
DA = 5% */

let baseSalary:number = 80000;
let hra:number = baseSalary * 0.10; 
let da:number = baseSalary * 0.05;
let totalSalary:number = baseSalary + hra + da;

console.log(`Total salary of the employee is :- ₹ ${totalSalary}`);