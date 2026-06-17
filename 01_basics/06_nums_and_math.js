const score = 400;
// console.log(score);

// New way to define Number explicitly --->
const balance = new Number(100);  // It will give us [Number: 100] , this means specifically this is number.
// console.log(balance);

// toString() => convert into String
console.log(balance.toString().length);  // it will convert number into string
const numStr = balance.toString();
console.log(typeof numStr)

// toFixed() => It will fixed digit after decimcal.
console.log(balance.toFixed(2));  

// toPrecision() =>  It will precise value but focused/prefrence on before decimal and then after decimal and depend upon
// taken digit inside toPrecision(2).
const otherNum = 23.45344;
console.log(otherNum.toPrecision(3));

// toLocaleString() => it easy the representation of digit but by default it will show in US pattern until we use 'en-IN'
const newNumber = 1000000;
console.log(newNumber.toLocaleString('en-IN'));


