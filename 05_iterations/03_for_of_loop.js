// for of loop ===>

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello Pihu";
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}


const greetingsOne = "Hello Pihu";
for(const greet of greetingsOne){
    if(greet == " "){
        break;
    }
    // console.log(`Each char is ${greet}`);
}


// Maps ===> / New data type in javascript ===> Maps Object holds data in key value pair and also unique, it's like array. 
// It remembers insertion order of key but object don't remember.

const map = new Map();

map.set('Ind', "India");
map.set("USA", "United State");
map.set('Fr', "France");

// console.log(map);


// ======== If we aplly loop on this =========

// It will print complete array seperately like ['Ind', 'India'] ['USA', 'United State'] ===>
for(const key of map){
    // console.log(key);
}

// It will print key value pair seperatly, destructuring of array.
for(const [key, value] of map){
    // console.log(key, ":-", value);
}


// for of loop will not work on object.

const myObject = {
    game1 : "NFS",
    game2 : "Pubg"
}

// for(let [gameKey, gameName] of myObject){
//     console.log(gameKey, ":-", gameName);
// }