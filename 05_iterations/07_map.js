// Map Method ====>

const myNum = [1, 2, 3, 4, 5, 6];

const newNum = myNum.map( (num) => {
    return num + 10;
} );
console.log(newNum);


// Same example with the help of forEach ---->
const myNum1 = [];
myNum.forEach((num)=>{
    if(num>0){
        let numAdd = num + 10;
        let newNum = myNum1.push(numAdd);
        return newNum;
    }
});
// console.log(myNum1);


// Chaining of Methods ===>

const newNumber = myNum.map((num)=>{
    return num * 10;
}).map((num)=>{
    return num + 1;
}).filter((num)=>{
    return num > 30;
});
console.log(newNumber);