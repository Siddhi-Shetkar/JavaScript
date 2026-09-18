// Ask user for their name and create a username by concatenating "@" with their name and the length of their name. Then, log the username to the console.

let name = prompt("Enter your name");
let username = "@" + name + name.length;
console.log(username);