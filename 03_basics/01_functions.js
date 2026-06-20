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
// console.log(loggedUserOne);



// If we are working at ecommerce web and make add cart pannel so I want add all value b/c we don't know how many items will 
// add in cart through customer. So here we will use rest operator in parameter b/c we don't how many items will come through
// customer. 

// then we will use rest operator.

function calculatePrice(...num1){
    return num1
}

const calc = calculatePrice(200, 400, 350);
// console.log(calc);


// Function with Object or Object inside function (How we can pass object in function) -->

const user = {
    name: "sam",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    return `Username is ${anyobject.name} and price is ${anyobject.price}`
}
const user1 = handleObject(user);
console.log(user1);


// Or we can pass object during function call 

function handleObjectOne(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    // return `Username is ${anyobject.name} and price is ${anyobject.price}`
}

handleObjectOne({
    username: "Pihu",
    price: 399
});



// Function with Array or Array inside Function (How we can pass array inside function) --->

const myNewArray = [1, 2, 3, 4, 5, 6];

function returnSecondValue(getArray){
    return getArray[2];
}

const returnVal = returnSecondValue(myNewArray);
console.log(returnVal);
