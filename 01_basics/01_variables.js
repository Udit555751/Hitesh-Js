const accountId = 12321;
let accountEmail = "udit21@gmail.com";
var accountPassword = "12345";
accountCity = 'Delhi';
let accountState;

// accountId = 2;  // Not Allowed b/c it's constant

console.log(accountId);

accountEmail = 'udit11@gmail.com';
accountPassword = '121';
accountCity = "Lko";

/*
  Prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

