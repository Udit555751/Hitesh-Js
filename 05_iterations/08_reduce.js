// Reduce Method ===>

const myNum = [1, 2, 3, 4, 5];
let init = 0;

const totalValue = myNum.reduce((accum, currVal)=>{
    return accum + currVal;
}, init);

console.log(totalValue);

const shopingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "nodejs course",
        price: 2999
    },
    {
        itemName: "react course",
        price: 2999
    },

];

const cartItem = shopingCart.reduce((accum, item)=>{
     return accum + item.price;
}, 0);

console.log(cartItem);