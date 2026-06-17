const score = 400;
// console.log(score);

// New way to define Number explicitly --->
const balance = new Number(100);  // It will give us [Number: 100] , this means specifically this is number.
// console.log(balance);

// toString() => convert into String
// console.log(balance.toString().length);  // it will convert number into string
const numStr = balance.toString();
// console.log(typeof numStr)

// toFixed() => It will fixed digit after decimcal.
// console.log(balance.toFixed(2));  

// toPrecision() =>  It will precise value but focused/prefrence on before decimal and then after decimal and depend upon
// taken digit inside toPrecision(2).
const otherNum = 23.45344;
// console.log(otherNum.toPrecision(3));

// toLocaleString() => it easy the representation of digit but by default it will show in US pattern until we use 'en-IN'
const newNumber = 1000000;
// console.log(newNumber.toLocaleString('en-IN'));


// +++++++++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math);   // It's a Object which contain many property of Maths.

// abs() => stands for absolute value and it will use only for to convert -ve value into +ve value.
// console.log(Math.abs(-4));

// round() => it will use to round the digit.
// console.log(Math.round(4.3));

// ceil() => it will use to give the top number which is given by us. like 4.3 gives => 5
// console.log(Math.ceil(5.3));

// floor() => it will use to give down number which is given by us. 4.9 => gives 4
// console.log(Math.floor(4.9));

// min() => it gives the minimum value.
// console.log(Math.min(2,4, 6,1));

// max() => it gives the maximum value.
// console.log(Math.max(4,6,9,2));


//  Mostly we use the Math library ==========>>>>>>>

console.log(Math.random());    // Math.random() always gives the value b/w 0 to 1 any it always it will vary.

// It will shift decimal value and we add 1 b/c of in case of 0 atleast it should give 1
console.log((Math.random() * 10) + 1);  
console.log(Math.floor(Math.random() * 10) + 1);  


// ========= Way to generate a random number within given range ==========

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1 )) + min );
