//print even numbers from 0 to 100
for(let i =0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

//take a number from user and check with game number if its a match or not. If not then tell the user if the number is greater or smaller than the game number.
let gamenum = 25;
let usernum = prompt("Enter a number :");

while(usernum!=gamenum){
    usernum =prompt("You entered wrong number. Guess again:");
}

console.log("Congratulations! You guessed the correct number.");