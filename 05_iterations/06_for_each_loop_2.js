//  for Each loop ===> for Each loop will not retrn any value.

const myArr = ["js", "python", "java", "ruby"];

const values = myArr.forEach( (item, index, arr) =>{
    // console.log(item);
    return item;
} );
// console.log(values);


// We can do same task easily with the help of filter ----> 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter( (num) =>  num > 4 );  // implicit return
const newNum = myNum.filter( (num) =>  {
    return num > 4
} );                             // Explicit return
// console.log(newNum);


// We can do same thing with forEach loop ====>

const myNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum1 = [];

myNum1.forEach( (item) => {
    if(item > 5){
        newNum1.push(item);
    }
} )
// console.log(newNum1);


const books = [
    {title: 'Book One', genre: "Friction", publish: 1981, edition: 2004},
    {title: 'Two One', genre: "Non-Friction", publish: 1992, edition: 2008},
    {title: 'Three One', genre: "History", publish: 1994, edition: 2007}
];


const userBooks = books.filter( (book) => {
     return book.genre === "History"
} );

console.log(userBooks);


const userBooksOne = books.filter( (bk) => {
    return bk.publish > 1990 && bk.edition > 2005
} );

console.log(userBooksOne);