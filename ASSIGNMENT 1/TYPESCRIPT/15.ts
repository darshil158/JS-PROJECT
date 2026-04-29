/* Write a program to calculate electricity bill:
up to 100 units = ₹5 per unit
above 100 units = ₹8 per unit */

let units:number = 150; 
let totalBill:number;

if (units <= 100 && units >= 0) {
    totalBill = units * 5;
    console.log(`Total electricity bill for ${units} units is :- ₹ ${totalBill}`);
}
else if (units > 100) {
    totalBill = units * 8;
    console.log(`Total electricity bill for ${units} units is :- ₹ ${totalBill}`);
}
else {
    console.log("Invalid number of units.");
}