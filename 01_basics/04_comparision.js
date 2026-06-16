// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);   // it will give true b/c js automatically convert string into number but it's not good practice 
// to compare different type of data.
// console.log("02" > 1);


console.log(null > 0);   // false 
console.log(null == 0);  // false 
console.log(null >= 0);  // true => comparison convert null to a number, treating it as 0 that's why it gives true.


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


// ================= Strict Check ================

console.log("2" === 2);
