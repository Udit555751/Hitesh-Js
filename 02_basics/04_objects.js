// Object Part - 2

// We want to declare object with the help of constructor --> Make it singleton 

const tinderUser = new Object();

tinderUser.id = "2312";
tinderUser.name = "Mohit";
tinderUser.email = "mohit13@gmail.com";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);


const regularUser = {
    email: "sam11@mail.com",
    fullName: {
        userfullname: {
             firstName: "Samrat",
             lastName: "Tiwari"            
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);


const obj1 = {
    1: "A",
    2: "B"
}

const obj2 = {
    3: "C",
    4: "D"
}

// Two way to combined two objects in a single object 1. Spread Operator 2. Object.assign Method -->

const comObj = {...obj1, ...obj2};
// console.log(comObj);

const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);


// Array of Object --->
const users = [
    {
        id: 1,
        email: "hr12@gmail.com"
    }
]

console.log(users[0].email)


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));   // It will convert each ek value pair in array.
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// Object Destructuring -->

const newObj = {
    name: "Sam",
    phone: 7233444343
}

const {name}  = newObj;

// we can also manipulate value during destructuring -->

// const {name: instructor} = newObj;

// console.log(name);
