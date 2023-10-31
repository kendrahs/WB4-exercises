"use strict";
//p 14
//supplierCode: productNumber-size
function parsePartCode(partcode) {
    let positionOfColon = partcode.indexOf(":")
}

parsePartCode

//call, store retruned, print out
let partCode1 = "XYZ:1234-L";

let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode +
 "Product Number: " + part1.productNumber +
 "Size: " + part1.size)
//or 
function DisplayPart(part) {
console.log(part1.partCode);
console.log("Supplier: " + part1.supplierCode);
console.log("Product Number: " + part1.productNumber);
console.log("Size:" + part1.size);
}

