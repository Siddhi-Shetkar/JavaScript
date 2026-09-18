// enter marks of students in an array and find the average marks of the students. 
let marks = [45, 78, 89, 90, 56];
let avg = 0;
for(let i=0; i<marks.length; i++){
    avg+=marks[i];
}

avg = avg/marks.length;
console.log("Average marks of students is: " + avg);

//create an array for prices of items and apply 10% off on each item and print the new prices of items in the console.
let prices = [100, 200, 300, 400, 500];
for(let i=0; i<prices.length; i++){
    prices[i] = prices[i] - (prices[i]/10);
}
console.log("New prices of items are: " + prices);

//create an array to store company names and remove 1st comapny name then remove Uber and add Ola and then add amazon at the end
let companies = ["Google", "Microsoft", "Uber", "Facebook"];
companies.shift();
console.log("After removing first company: " + companies);
//add ola in place of uber -> Use splice for this
companies.splice(2, 1, "Ola");
console.log("After adding Ola: " + companies);
companies.push("Amazon");
console.log("After adding Amazon: " + companies);
