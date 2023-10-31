let myOrder = [ 
    {item: "Chicken Tacos", price: 8.95},
    {item: "Guacamole", price: 2.85},
    {item: "Sweet Tea", price: 2.75}
   ];

let yourOrder = [ 
 {item: "Hamburger", price: 6.95},
 {item: "Fries", price: 2.25},
 {item: "Sweet Tea", price: 2.75},
 {item: "Fried Apple Pie", price: 4.95}
];


function getMealCost(order) {
    let totalcost = 0;
    for(let i = 0; i < order.length ; i++){
        let thisitemCost = order[i].price;
        totalcost += thisitemCost; //add to total
    }
    return totalcost
}

let costOfYourOrder = getMealCost(yourOrder);
console.log("your order costs" + costOfYourOrder);