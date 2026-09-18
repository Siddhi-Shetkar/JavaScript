//create a fucntion that takes string as an argument and returns vowels in that string
function getVowels(str) {
    let vowels = '';    
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels += char;
        }
    }
    return vowels;
}
getVowels("Hello World"); // returns "eoo"

//create an arrow function for the same
const getVowelsArrow = (str) => {
    let vowels = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels += char;
        }
    }
    return vowels;
};
getVowelsArrow("Hello World"); // returns "eoo"