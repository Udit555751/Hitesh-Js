// Objects --->  Two ways to make object constructor(if we make with it then singleton formed) and object literal

// Object.create() ==> It is object constructor.
// Object constructor --> It will formed singleton 

// Object Literal -->

const mySym = Symbol("key1");   // Take a symbol and add in object as a key 

const JsUser = {
    name: "Samrat",
    "full name": "Samrat Tiwari",  // This value can't access with dot so we will use square bracket.
    age: 25,
    location: "Delhi",
    [mySym]: "myKey1",
    email: "sam21@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);


// Way to change value of object --->

JsUser.email = "sam11@gmail.com";
// console.log(JsUser.email);


// We can freeze value with the help of this nobody can change the value --->
// Object.freeze(JsUser);
JsUser.name = "Sam";
// console.log(JsUser);
// console.log(JsUser.name);


JsUser.greeting = function(){
    console.log("Hey Js Developer");
}
console.log(JsUser.greeting); // It will return back function reference, function is not executed.
console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hello js user Mr ${this.name}`);  // When we reference same object then we can use "this" keyword.
}

console.log(JsUser.greetingTwo());