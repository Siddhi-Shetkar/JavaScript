//FOR LOOP
for(let i=1;i<=5;i++){
    console.log("Apna College");
}

//calculate sum of numbers from 1 to n 
let sum =0;
for(let i=1;i<=5;i++){
    sum+=i;
}
console.log(sum);

for(var i=1;i<=5;i++){
    console.log("i="+i);
}
console.log("value of i after loop="+i);
//if we use let then it will give error because let is block scope and var is function scope

//WHILE LOOP
let k =1;
while(k<=5){
    console.log("k="+k);
    k++;
}

//DO WHILE LOOP
let j=6;
do{
    console.log("j="+j);
    j++;
}while(j<=5);
// it'll print once atleast because do while loop executes the block first and then checks the condition

//FOR-OF LOOP
let str = "Apna College";
for(let i of str){
    console.log(i);
}

let size = 0;
let st = "Javascript";
for(let i of st){
    console.log(i);
    size++;
}

console.log("size of string is "+size);

//FOR-IN LOOP
let student={
    name:"Aditya",
    age:20,
    course:"Btech",
    cgpa:8.87
};

for(let key in student){
    console.log(key+" : "+student[key]);
}
