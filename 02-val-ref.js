









/* Part 1 */

var myName = "Edouard";
var yourName = myName;

myName = "Frank";

console.log(myName);
// Frank

console.log(yourName);
// Edouard














/* Part 2 */
var myAddress = {
    street: "123 JS Blvd",
    city: "Austin",
    state: "TX"
};

var yourAddress = myAddress;

// Je change d'adresse
myAddress.street = "456 TS Ave";

console.log(yourAddress.street);
