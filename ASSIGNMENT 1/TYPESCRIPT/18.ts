/* Write a program to calculate discount:
purchase above ₹5000 = 15% discount
otherwise 5% discount */

let amount: number = 6000;
let discount: number;
let finalAmount: number;
console.log("Purchase Amount :- ₹ " + amount);

if (amount > 5000) {
    discount = amount * 0.15;
    finalAmount = amount - discount;
    console.log("Discount :- ₹ " + discount);
    console.log("Final Amount after 15% Discount :- ₹ " + finalAmount);
}
else if (amount <= 5000 && amount > 0) {
    discount = amount * 0.05;
    finalAmount = amount - discount;
    console.log("Discount :- ₹ " + discount);
    console.log("Final Amount after 5% Discount :- ₹ " + finalAmount);
}
else {
    console.log("Invalid Purchase Amount !!!");
}
