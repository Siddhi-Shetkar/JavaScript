//Arithemetic operators
let a = 5;
let b = 10;
console.log(a + b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++); //Unary operators
console.log(a);

//Assignment operators
let c = 4;
let d = 12;
c+=a;
d-=b;
console.log(c);
console.log(d);
//*=, %=, **=, /=


//Comparison operators
let e = 5;
let f = 10;
console.log(e==f);
console.log(e!=f);
console.log(e>f);
console.log(e<f);
console.log(e>=f);
console.log(e<=f);

let x = 5;
let y = "5"; //string -> number
console.log(x===y); //false
console.log(x!==y); //true


//Logical operators
let g = 6;
let h = 12;

let cond1 = g>h; //false
let cond2 = g==6; //true

console.log(cond1 && cond2); //false
console.log(cond1 || cond2);
console.log(!cond1); //true


//Condtional statements
let age = 20;
if(age>=18){
    console.log("Can vote");
}

let color;
let mode = "dark";
if(mode=="dark"){
    color = "black";
}
else{
    color = "white";
}
console.log(color);

let age1 = 24;
if(age1<18){
    console.log("Junior");
}
else if(age>60){
    console.log("Senior");
}
else{
    console.log("Middle aged");
}

age1>18 ? console.log("Adult") : console.log("Minor"); //Ternary operator

//Switch statement
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}