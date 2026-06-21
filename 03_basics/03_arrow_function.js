// Arrow function and this keyword ===>

// this keyword refers to current context -->

const user = {
    username : "Udit",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);
        // console.log(this);  // It will tell about whole object here which is current context .
    }
}

// user.welcomeMessage();

// Value change ho jaayegi kyu ki humne hard code nhi kiya tha, humne kaha tha jo bhi current 
// context hai uss current context ke andar jo username ki value hai usko print kro.

user.username = "Sam";  
// user.welcomeMessage();


// console.log(this);   // Here this will refer empty object b/c global scope is empty no context in global scope,
//  but in browser console we get window object.


//  When we console this within a function we get many values.
function chai(){
    let username = "sam";
    console.log(this.username);  // It will give undefined we can not fetch through this keyword inside function.
}
// chai();


const chaiOne = function(){
    let username = "sam";
    console.log(this.username);  // It will give undefined we can not fetch through this keyword inside function.
}
// chaiOne();


// this keyword will also not work inside arrow function.
const one = () => {
    let username = "sam";
    console.log(this.username);
}
// one();


const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3,4));

// Implicit Return ==> // It is implicit return when we have single line statement, 
// we don't need curly braces and return keyword.
const addTwoNum = (num1, num2) =>  num1 + num2;
console.log(addTwoNum(4,4));

// OR

const arrFun1 = (num1, num2) => (num1 + num2);
console.log(arrFun1(3,4));

//  If we want return object implicitly/in single then we will use ({})
const arrFun2 = () => ({username : "Samrat"});
console.log(arrFun2());