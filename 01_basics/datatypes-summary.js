// Primitive Data Type / call by value => jab hum inhe kahi se kahi copy krte hai to original refernce memory ka nhi diya 
// jaata hai, inko copy krke diya jaata hai. Jo bhi change krte hai copy me hota hai.

// 7 Types => String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;  // Js is dynamically typed.
const scoreVal = 111.45;

const isLoggedIn = false;
const outSideTep = null;

let userEmail;

// If we pass same value in Symbol but both have different return value/result
const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 2333434n


// Reference Type / Non Primitive 

// Arrray, Objects, Functions


const heros = ['shaktiman', 'naagraj', 'doga'];

let myObj =  {
    name: "Udit",
    age: 25
}

const myFunc = function(){
    console.log("Hey");
}


// ************************ Memory *****************************

// Stack (Primitive) => Jab Stack Memory use hoti hai to jo bhi humne variable declare kiya hai uski copy milti hai .
// Heap (Non-Primitive) => Jab koi memory heap ke andar define hoti hai to waha se milta hai reference matlab original value,
// jo bhi change krenge vo original value me change hoga.

// Stack Eg.

let myName = 'Udit';

let anothername = myName;

anothername = 'Sam';


console.log(myName);
console.log(anothername);


// Heap Eg.

let userOne = {
    email: "sam21@gmail.com",
    name: 'Samrat',
    age: 25
}

let userTwo = userOne;

userTwo.email = 'sam11@gmail.com';

console.log(userOne.email);
console.log(userTwo.email);
