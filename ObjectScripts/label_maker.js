"use strict";

let contact1 = {
    namee: "Ezra Smith",
    address: "123 Main St",
    city: "Anytown",
    state: "NY",
    zip: "12345"
};

let contact2 = {
    namee: "Joe Smith",
    address: "345 Main St",
    city: "Notown",
    state: "NY",
    zip: "12345"
};

function printContact(contact) {
    console.log(contact.namee);
    console.log(contact.address);
    console.log(contact.city + ", " + contact.state + " " + contact.zip);
}

printContact(contact1);
printContact(contact2);