let str = "Siddhi Shetkar";
let str1 = "Apna College";

console.log(str.length);
console.log(str1[4]);

//Template literals
let specialstring = `This is a template literal`;
console.log(specialstring);
console.log(typeof(specialstring));

let obj={
    item:"pen",
    price:20
};

let output = `The item is ${obj.item} and the price is ${obj.price} rupees`;
console.log(output);
//This is how we can use template literals to print the values of an object in a string.

let college = `CBIT is \n a good college`;
console.log(college);