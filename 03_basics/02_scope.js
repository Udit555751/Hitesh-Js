// Scope ===>  Global Scope and Block Scope 

// let vs var ==> let and const comes under block scope and can not redeclare but var comes under global scope and can redeclare.


// Global Scope ==> Global scope variable can access inside block scope.

// let a = 10;
// const b = 20;
// var c = 30;


// Block Scope ==> Block scope variable can not access outside of scope/ global scope.

let a = 300;

if(true){
    let a = 10;
    const b = 20;
    // console.log("Inner :", a);
}

// console.log(a);
// console.log(b);


// Nested Function or Nested Scope ===>

// Child can access parent's data but parent can't access child's data this can be also called closure.

function one(){
    const username = 'Sam';

    function two(){
        const website = 'youtube';
        console.log(username);
    }
    // console.log(website);  // It will give error b/c we want to access this variable outside of the scope.

    two();

}

one();


if(true){
    const username = "samrat";

    if(username === "samrat"){
        const surname = " tiwari";
        console.log(username + surname);
    }
    // console.log(surname); // It will give error b/c we want to access this variable outside of the scope.
}
// console.log(username); // It will give error b/c we want to access this variable outside of the scope.



// ++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++

// This is normal function ---> We can call/access this function before declration. 
// Reason ==> Memory creation phase me poora function memory me store ho jata hai, 
// Isliye function declaration ko uski definition se pehle bhi call kar sakte hain. Is property ko Hoisting kehte hain.

const res = addOne(5);
console.log(res);

function addOne(num){
    return num + 1;
}


// This is function expression, when we store a function in a variable that is called function expression.
// This function can't call/access before declration b/c it is concept of hoisting. It works only at var keyword, 
// it put declration at the top side.  

// Resaon ==> const aur let hoist to hote hain.
// Lekin initialization se pehle Temporal Dead Zone (TDZ) me rehte hain.
// Isliye unhe use nahi kar sakte.


const addTwo = function(num1){
    return num1 + 2
}
console.log(addTwo(5));

