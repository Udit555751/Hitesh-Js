const name = " Udit "
const age = 25;

// console.log(name + age);  // Outdated syntax

// console.log(`Hello my name is ${name} and age is ${age}`);


// ============== Other method to declare string ==============

const gameName = new String('Himesh-tech');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));


// Substring => // last value will not includes o/p is Him and it takes only +ve value.
const newString = gameName.substring(0,3);   
console.log(newString);


// Slice =>  it can take +ve and -ve both value, -ve will start from last character of string and last index number 
// will not include.
const anotherString = gameName.slice(-11,4);   
console.log(anotherString);


// trim() => remove the space
const newStringOne = "   Sam  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());


// replace() => is used to replace something from another value.
const url = 'https://google.com';
console.log(url.replace(url, 'https://yahoo.com'));

const urlOne = 'https://samfile%20tech';
console.log(urlOne.replace('%20', '-'));


// includes() => it will check that word/digit/char is present or not
console.log(urlOne.includes('sam'));


// split() => it converts string into array, it takes 2 value seperarter and limit.
console.log(gameName.split("-"));

const splt = gameName.split('');
console.log(splt[3]);  
