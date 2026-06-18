// Array ===>

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["shaktiman", 'Nagraj'];
// console.log(myArr[2]);


// Another Way to define the array ==>
const myArr2 = [1, 2, 3, 4, 5, 6];
// console.log(myArr2[1]);

// ========== Array Methods ========>

// Push() ===>
myArr.push(7);
// console.log(myArr);

// pop() ===>
myArr.pop();
// console.log(myArr);

// unshift() ===> Add the element at the first index.
myArr.unshift(0);
// console.log(myArr);

// shift() ===> Remove the element from first index.
myArr.shift();
// console.log(myArr);

// includes() ===> It will check that element is present or not in that array.
// console.log(myArr.includes(3));

// indexOf() ===> It will give the index of element.
// console.log(myArr.indexOf(4));

// join() ===> It binds our array and convert into string, so change the data type of array.
const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);


// slice, splice 

// slice() ==> last range will not include and it will not manipulate/change the original array.
console.log('A', myArr);
const myN1 = myArr.slice(1, 3);
console.log(myN1);
console.log("B", myArr);



// splice() ===> last range will include and it will manipulate/change the original array.

console.log('C', myArr);
const myN2 = myArr.splice(1,3);
console.log(myN2);
console.log("D", myArr);


