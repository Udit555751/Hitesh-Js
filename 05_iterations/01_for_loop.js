// for loop ===>

for (let i = 0; i <= 10; i++) {
    const element = i;

    if(element == 5){
        // console.log('5 is lucky number')
    }

    // console.log(element);
 
}


// Nested for Loop ===>

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i * j )
    }
    
}

// Print the table of 5 with nested loop ===>

for (let i = 5; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

// Or 

for(let i = 1; i <= 10; i++){
    // console.log(`5 * ${i} = ${5 * i}`);
}


// for loop on array ===>

const myArr = ['mango', 'apple', 'banana'];

for(let i = 0; i < myArr.length; i++){
    const element = myArr[i];
    // console.log(element);
}


// break and continue keyword ===> In break, after matching the condition control comes outside of loop and in continue after 
// matching the condition once it will ignore and execution will continue.

for(let i = 0; i <=10; i++){
    
    if(i == 5){
        console.log(`Dedected 5`);
        break;
    }

    console.log(`the value is ${i}`);
}


for(let j = 0; j <= 10; j++){
    if(j == 5){
        console.log(`Dedected 5`);
        continue;
    }
    console.log(`the value is ${j}`);
}