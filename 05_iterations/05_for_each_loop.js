// for Each loop ===>
//  With the help of this we can get value, index and complete array. forEach can take
// 3 parameter item, index and array. It returns call back fuunction. This is also call higher order function.

const coding = ["js", "java", "python", "ruby"];

coding.forEach((item, index, arr) => {
    // console.log(item);
});


// forEach with function as a parameter ===>

const numbers = [1, 2, 3, 4, 5];

function printMe(num){
    console.log(num);
}
// numbers.forEach(printMe);


// Array of Object ===>

const myCoding = [
    {
        languageName : 'Javascript',
        languageFileName : 'js'
    },
    {
        languageName : 'Java',
        languageFileName : 'java'
    },
    {
        languageName : 'NodeJs',
        languageFileName : 'node'
    }
];

myCoding.forEach( (language) => {
    // console.log(language);
} );


myCoding.forEach( (language) => {
    console.log(language.languageFileName);
} );
