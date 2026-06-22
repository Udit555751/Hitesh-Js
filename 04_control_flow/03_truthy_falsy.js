// Truthy and falsy value ===>

// falsy value ---> false, 0, "", undefined, null, Nan, -0, bigInt(0n);
// confusion truthy value ---> "0" , "false", " " , [] , {} , function(){} 

const userEmail = "sam12@gmail.com";

if(userEmail){
    console.log("Got User Email");
} else {
    console.log("Don't have user Email");
}


// Way to check array is empty or not b/c it's truthy value.
const arr = [];
if(arr.length === 0){
    console.log('Array is empty');
}

// Way to check object is empty or not b/c it's also truthy value.
let obj = {};  // object always give the array of keys or array of values, so we will apply length property.
if(Object.keys(obj).length === 0 ){
    console.log("Object is Empty");
}
