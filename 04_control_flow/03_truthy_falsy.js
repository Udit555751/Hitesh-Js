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


// Nullish coalesing Operator (??) : null undefined ==> 

// Ye left side ki value return karta hai agar wo null ya undefined na ho, 
// Dhyan rahe, ?? sirf null aur undefined ko check karta hai. 0, false, aur "" ko valid values maanta hai.

// ?? (Nullish Coalescing Operator) check karta hai ki left side ki value null ya undefined hai ya nahi.
// Agar left side null ya undefined ho ➝ right side ki value return hoti hai.
// Warna left side ki value return hoti hai.


let val1;
val1 = 7 ?? 3;
console.log(val1);

const val2 = null ?? 2;
console.log(val2);

let val3 = undefined ?? 4;
console.log(val3);

const val4 = null ?? 3 ?? 5;  // null ke baad jo first value milegi wahi return kr dega.
console.log(val4);

// Difference: ====>

// || → saari falsy values (0, false, "", null, undefined, NaN) ko reject karta hai.
// ?? → sirf null aur undefined ko reject karta hai.  

// Example ==>

console.log(0 || 5);   // 5
console.log(0 ?? 5);   // 0

console.log("" || "Hi");  // Hi
console.log("" ?? "Hi");  // ""

console.log(null || 5);   // 5
console.log(null ?? 5);   // 5




// ========= Turnery Opertor (?) ========>

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log('Less than 80') : console.log('More than 80');
