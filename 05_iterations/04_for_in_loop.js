/// for in loop ===> for in loop directly pick the key of object or array. 
// for in loop works same with array and object. With the help of this we can get 
// key value pair seperatly and both.


// ===== Apply on Object ====>

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for(let key in myObject){
    // console.log(key);   // It will print only key of object.
    // console.log(myObject[key]);  // It will print only value of object.
    // console.log(`${key} shortcut is for ${myObject[key]}`);  // It will print both.
}



// ====== Apply on Array ====>

const myArr = ["js", "ruby", 'python', "java"];

for(let key in myArr){
    // console.log(key);   // It will print only key of array.
    // console.log(myArr[key]);  // It will print value of array.
    console.log(`${key} is the index of ${myArr[key]}`);  // It will print both.
}


// for in loop will not work on map data type (it is not itrable) ===>

const map = new Map();
map.set('Ind', "India");
map.set('fr', 'France');

for(const key in map){
    console.log(key);
}

