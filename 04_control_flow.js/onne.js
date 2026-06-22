// Control Flow ===>

// if statement -->

const isUserLoggedIn = true;
const temp = 41;

if (temp < 50) {
  // console.log("Temp is less than 50");
} else {
  // console.log("Temp is greater than 50");
}


if(2 == "2") {
  // console.log("Executed");
}

const score = 200;

if(score > 100){
  const power = "fly";
  // console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`);  // It will give error b/c we console it out side of scope.

// Implicit Scope --> But is not good practice 

const balance = 1000;
// if(balance > 500) console.log("test") , console.log("test2");

// Nested if else --->

if(balance < 500){
  console.log("less than 500");
}
else if(balance < 750){
  console.log("less than 750");
}
else if(balance < 900){
  console.log("less than 900");
}
else{
  // console.log("less than 1200");
}

// AND (&&)(m percent) operator --> if both conditions will true. 

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(userLoggedIn && debitCard){
  console.log("Allow to buy courses");
}

// OR (||) operator --> one condition will true.

if(loggedInFromEmail || loggedInFromGoogle){
  console.log("Loggin Successfully");
}