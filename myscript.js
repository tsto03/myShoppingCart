let userName = prompt("Enter user name"); 

let product1Name = prompt("Enter product 1 name");

let product1Price = prompt("Enter product 1 price");

let product2Name = prompt("Enter product 2 name");

let product2Price = prompt("Enter product 2 price");

let product3Name = prompt("Enter product 3 name");

let product3Price = prompt("Enter product 3 price");

if (product1Price == 0) {
    window.alert("order now!");
    
} else {
    window.alert("Price can't be 0. Enter a valid price");
    
}

console.log(Number(product1Price)+Number(product2Price)+Number(product3Price));

let total = "Your cart total is:" + product1Price + "+" + product2Price + "+" + product3Price + "+" + "for a total of $" + Number(product1Price)+Number(product2Price)+Number(product3Price)+ ".";
console.log(total); 

let grandTotal = Number(total*0.0625)+Number(total); 

console.log(userName + "," + " " + "your grand total is: $")