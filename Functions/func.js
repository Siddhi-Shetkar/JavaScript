function myfunction(){
    console.log("Hello World");
    console.log("This is my first function");
} // function definition

//fucntion call
myfunction();

//fucntion definition with parameters
function add(a, b){
    let sum = a + b;
    console.log("Sum of " + a + " and " + b + " is: " + sum);
} // function definition

//function call with arguments
add(10, 20);
add(30, 40);
add(50, 60);

//Arrow fucntion
const multiply = (x, y) => {
    let product = x * y;
    console.log("Product of " + x + " and " + y + " is: " + product);
} // arrow function definition