const marvel_heros = ['thor', 'ironman', 'spiderman'];
const dc_heros = ['superman', 'batman', 'flash'];
 
// It will push second array into first array because array can take any data as a value. 
// o/p ==> [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// concat() ===> It will add and return new array.
const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// spread operator ===> Here, at the place of concat we will use spread opertor.
const all_Heros = [...marvel_heros, ...dc_heros];
// console.log(all_Heros);

// flat() ===> It will convert nested array into single array, or we can flat to that array according us.
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]];
const realAnotherArr = anotherArr.flat(3);  // We will pass depth in flat, till there we want to flat / infinity.
// console.log(realAnotherArr);


// These method are mostly used for data scrapping.

// isArray() ===> It will check this is array or not.
console.log(Array.isArray("Samrat"));

// Array.from() sirf ek iterable object (jaise string, array, Set, NodeList) ya array-like object leta hai
console.log(Array.from("Samrat"));  // It will convert into array.

console.log(Array.from({name: "Samrat"}));  // Here it will not convert into array b/c of here is key value pair so that's why 
// we have to tell it which element should convert into array.


let score1 = 100;
let score2 = 200;
let score3 = 300;

// rray.from() sirf ek iterable object (jaise string, array, Set, NodeList) ya array-like object leta hai. 
// Numbers (100, 200, 300) iterable nahi hote.

// console.log(Array.from(score1, score2, score3));  ++++++ // wrong syntax ++++++

// Array.of() kya karta hai?

// Ye jitni bhi values tum pass karte ho, un sabko lekar ek naya array bana deta hai.

// Array.of() ===> This is another way to convert into array.
console.log(Array.of(score1, score2, score3));

// difference b/w both ===> Array.of() and Array.from()

// Array.of() → "Mujhe ye values array me chahiye."
// Array.from() → "Mujhe is iterable/array-like object se array banana hai."