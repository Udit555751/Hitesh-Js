const promiseOne = new Promise(function(resolve, reject){
    // DB an Async Task
    // DB Calls, cryptography, network
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise Consumed");
    
});

// OR

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

// OR ==> We can pass data inside resolve like this as a parameter which can be array, object, function etc.

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Sam', email: 'sam21@gmail.com'});
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
});


// OR ===> Way to avoid Callback Hell we are doning multiple chaining.

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'Udit', password: '123'});
        } else{
            reject('Error: Something went wrong');
        }
    }, 2000)
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((myUserName) => {
    console.log(myUserName);
}).catch(function(err){
    console.log(err);
}).finally(() => console.log("The promise is either resolved or rejected")); // finally chalta hi hai chahe resolve ho 
// chahe reject ho.


// OR ===> Doing Promise using async await, async await can not handle error directly. so we have to use try{} catch{} block

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: 'javascript', password: '123'});
        } else{
            reject('Error: JS went wrong');
        }
    }, 2000)
})

async function consumePromiseFive(){
    try{
        let response = await promiseFive;
        console.log(response);
    } catch(err){
        console.log(err);
    }
}
consumePromiseFive();



// +++++++++ Async Await +++++++++ ======>
// +++++++ Fetch() Method +++++++ =====>

async function getAllUser(){
    try{

        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();

        console.log(data);

    } catch(err){
        console.log(err);
    }  
};
// getAllUser();


// ======== Do by .then() .catch() method ========>

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
