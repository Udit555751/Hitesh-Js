// iife ===> Immediately Invoked Function Expression

// We use this function when we don't want pollute this scope by global scope. 


function chai(){
    // console.log('DB Connected');
}
chai();


// this is syntax of iife ---> Named IIFE

(function chai(){
    console.log('DB Connected');
})();


// Unnamed IIFE --> With the help of Arrow Function.

( () => {
    console.log("DB connect 2");
} )();


// Way to pass parameter in iife ===>
( (name) => {
    console.log(`${name}`);
} )("Samrat");