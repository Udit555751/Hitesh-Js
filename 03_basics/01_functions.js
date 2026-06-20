// Functions  ====>

//  Function is used to wrap the code and with the help of this we can use multiple time of that bundle of code
//  just only call to that function.

const sayHello = function(){
    console.log('Hey');
    console.log("hey");
}
// sayHello();


// Functions with Parameter and Argument --

function addNumbers(number1, number2){
    console.log(number1 + number2);
}
// addNumbers(2,3);

//  We have to store return value in any variable and console that value.

function addNumberOne(num1, num2){
    const result = num1 + num2;
    return result;
}

const res = addNumberOne(4,7);
// console.log(addNumberOne(4,7));
// console.log("Result:", res);


function addNumberTwo(num1, num2){
    return num1 + num2;
}
const res1 = addNumberTwo(4,4);
// console.log("ResultOne:", res1);


// We can set default value if user will not enter any value then it will so undefined. so avoid this condition 
// we set default value.

function loginUserMessage(username){
    return `${username} just logged in`;
}

const loggedUser = loginUserMessage("Sam");
// console.log(loggedUser);


// function loginUserMessageOne(username){
//     if(username === undefined){
//         console.log('Please Enter the username');
//         return;
//     }
//     return `${username} just logged in`;
// }

// const loggedUserOne = loginUserMessageOne();
// console.log(loggedUserOne);

// =========== OR ============

// Also we can set default value.

function loginUserMessageOne(username = "Sam"){
    if(!username){
        console.log('Please Enter the username');
        return;
    }
    return `${username} just logged in`;
}

const loggedUserOne = loginUserMessageOne();
console.log(loggedUserOne);
