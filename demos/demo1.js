"use script";

let emp = {
    employeeId: "1", 
    name: "Ezra", 
    jobTitle: "Theater Teacher", 
    payRate: 38.46
    };

//or

//let emp = { employeeId:"1", name:"Ezra", 
 //jobTitle:"Theater Teacher", payRate:38.46 };

 //access object properties
 let emp1 = {
    employeeId: "1", 
    name: "Ezra", 
    jobTitle: "Theater Teacher", 
    payRate: 38.46
    };
   
 let emp2 = {
    employeeId: "2", 
    name: "Elisha", 
    jobTitle: "Game Programmer", 
    payRate: 43.27
    };

    console.log("Employee 1: " + emp1.name);
    console.log("Employee 2: " + emp2.name);
    // OR
    console.log("Employee 1: " + emp1["name"]);
    console.log("Employee 2: " + emp2["name"]);