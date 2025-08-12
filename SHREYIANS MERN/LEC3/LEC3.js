//1.) Slice
// so basically slice is used to slice the string into parts: so if we give the command to slice (0,4) it basically means that slice it from index 0  and go uptill the index 3 [one index before the commanded in the slice ] 

let string = "apple";
let answer = string.slice(0,4);

// 2.) Template strings/BACKTICKS [`  `]
// template strings is a type of marking strings only but the only difference is that it has the power to do calculations just by putting curly braces and putting dollar symbol

let str = `hey my age is ${15+4}`


// 3. Split 
// split is used to part ways of the string at points where the specific part that is mentioned
// suppose we need to split it from the alphabet o then it will split it as many times as many times the alphabet occurs and make its entries in the form of an array
let splitstring = "Hello how are you my friend";
let answeeer = splitstring.split("o");

// 4.Replace
// replace is used to replace a specific part of the substring with another substring

let replacestring = " HELLO HOW ARE YOU ?"
let replaceanswer = replacestring.replace('H','J');

// remember replace only replaces only the first occurance of the string not every string. that means j will be replaced only at one place where the first time the alphabet h will occur not at all points

// For all replacements use the keyword replaceall


// 5.) Includes
// Includes checks whether the checked substring is present in the whole string or not 

let includestring = "hey bro , how are you??";
let includesanswer = includestring.includes(",");// here it checks whether the substring "," is there in the main string or not
// it answers in the form of true or false

// common mistake : people forget to add inverted commas with what you wanna check in the whole string


// 6.) Switch operator
let day = prompt("Enter todays day");
switch (day) {
    case "Monday":
        console.log("Beginning of the week");
        
        break;
    case "Friday":
        console.log("Weekend is comming");
        break;
    default:
        console.log("Normal day brother");
        
}

// 7.) Ternary operator
    10>11 ? console.log("yo"): console.log("yoyo");
    

// 8.) Dynamic Loop
let arr = [1,2,3,4,5,6,7,8];
for (let i = 0; i < arr.length; i++) {
    console.log("hello");
    if (i===3) {
        break;
    }
}
// break breaks it there nd then only meanwhile
// continue just skips that part of the loop




