let marks = [45, 78, 89, 90, 56];
console.log(marks[2]);
console.log(marks.length);

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

//for of
for(let mark of marks){
    console.log(mark);
}

//push method - add to end
marks.push(100);
console.log(marks);

//pop method - remove from end
marks.pop();
console.log(marks);

//toString method - convert array to string
let str = marks.toString();
console.log(str);
console.log(typeof(str));

//concatenate two arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

//shift and unshift methods - add/remove from start
arr3.shift();
console.log(arr3);
arr3.unshift(0);
console.log(arr3);

//slice and splice methods - slice returns a new array, splice modifies the original array
let arr4 = [1,2,3,4,5];
let arr5 = arr4.slice(1,4);
console.log(arr5);
console.log(arr4);