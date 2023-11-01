"use script";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5},
    {item: "Sweet Tea", price: 2}
    ];

    let subTotal = 0;  

for (let i = 0; i < lunch.length; i++) {
    subTotal += lunch[1].price;
}

console.log(`Food subtotal: $${subTotal}.`)

let tax = subTotal * 0.08

console.log(`The 8% tax is : $${tax.toFixed(2)}.`)
console.log(`The total is $${subTotal+tax.toFixed(2)}.`)