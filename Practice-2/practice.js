alert("hello"); // one time popup message

//Q1 Take input using prompt and check whether the number is divisible by 5 or not. Display the result in console.
let num  = prompt("Enter a number:"); // one time input message
if(num%5==0){
    console.log("The number is divisible by 5");
}
else{
    console.log("The number is not divisible by 5");
}

//Q2 Write a code to give grades to students according to their marks. (A=>90-100, B=>80-89, C=>70-79, D=>60-69, E=>50-59, F<50)
let marks = prompt("Enter your marks:");
if(marks>=90 && marks<=100){
    console.log("Grade: A");
}
else if(marks>=80 && marks<=89){
    console.log("Grade: B");
}
else if(marks>=70 && marks<=79){
    console.log("Grade: C");
}
else if(marks>=60 && marks<=69){
    console.log("Grade: D");
}
else if(marks>=50 && marks<=59){
    console.log("Grade: E");
}
else{
    console.log("Grade: F");
}