let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));


// let valueInNumber = Number(score);
// console.log(typeof (valueInNumber));
// console.log(valueInNumber);

// "33" => 33
// "33ac" => NaN
// "true" => 1 / "false" => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false 
// "udit" => true


let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(someNumber)
// console.log(typeof stringNumber);


// ****************************** Operations **************************************


let value = 3;
let negVal = -value
console.log(negVal);


// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 / 3);
// console.log(2 % 3);


let str1 = "Hello";
let str2 = " Sam ";

let str3 = str1 + str2;
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


console.log(+true);  // it will give 1
console.log(+"");    // it will give 0

let num1, num2, num3

num1 = num2 = num3 = 2+2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);