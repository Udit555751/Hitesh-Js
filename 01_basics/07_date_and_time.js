// Dates ===> It's a object / Date is object type.

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);  // It's Object

// let myCreatedDate = new Date(2026, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2026, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2026-06-17");
let myCreatedDate = new Date("06-17-2026");
// console.log(myCreatedDate.toLocaleString());


// this can we used to book the room from date to date booking date to checkout date and then compare that date in milisec.
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); 

// way to convert in second ====>
console.log(Math.floor(Date.now() / 1000));

const newDate = new Date();
console.log(newDate.getMonth() + 1 );  // it's optional to add 1 otherwise we know it will start from 0 (months)
console.log(newDate.getDay() + 1 );


// `${newDate.getDay()} and time is ${newDate.getHours()} `


// We can customize the according ourself =====>>>>>>
newDate.toLocaleString('default', {
    weekday: "long",
    dateStyle: "medium"
});