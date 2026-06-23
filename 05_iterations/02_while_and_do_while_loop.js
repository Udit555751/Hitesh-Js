// While and do while ===>

    
let i = 0;
while (i <= 10) {
    // console.log(`the value is ${i}`);
    i = i + 2;
}


let myArr = ["mango", "orange"];

let j = 0;
while(j < myArr.length){
    const elem = myArr[j];
    console.log(elem);
    j = j + 1;
}


// Nested While loop 

let i = 5;
let j = 1;

while (i <= 5) {
    while (j <= 10) {
        console.log(`${i} x ${j} = ${i * j}`);
        j++;
    }
    i++;
}


let score = 1;

do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 5);