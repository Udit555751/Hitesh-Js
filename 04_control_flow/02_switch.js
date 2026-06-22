// Switch Case ===>

// Switch Statement ===> Mostly it will use to check multiple conditions and if we don't use break statement then 
// when it will match consition after below that condition all statement will execute except default case.

// Syntax -->

// switch(key){
//     case value:
//         break;
    
//     default:
//         break;   
// }


const month = 3;

switch(month){
    case 1: 
        console.log('Jan');
        break;
    
    case 2: 
        console.log("Feb");
        break;
    
    case 3:
        console.log("March");
        break;
    
    case 4:
        console.log("April");
        break;
        
    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;
       
    default:
        console.log("Default Case Match");
        break;    
}


const monthOne = "march";

switch(monthOne){
    case "jan": 
        console.log('jan');
        break;
    
    case "feb": 
        console.log("feb");
        break;
    
    case "march":
        console.log("march");
        break;
    
    case "april":
        console.log("april");
        break;

    default:
        console.log("Default Case Match");
        break;    
}
