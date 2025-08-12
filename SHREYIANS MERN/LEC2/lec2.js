// Studying the various types of the data types

// Primitive datatypes 


// 1.) Numbers
let a = 10.55555;//it can include whole numbers and even floating number.
console.log(a);



// 2.)Strings
let b =  "Ayush"
let c = ' is a good boy'
console.log(b+c);//when two strings are addded together then it is called as concatination
// the thing that is to be noticed that the strings can be initialised as double quotes or single...it doesnt matter at all



// 3.) Boolean
// remember the things that are in the prompt are by default stored as strings not as numbers
let ans = prompt("Enter your age");
if (ans>18) {
    console.log(true);
}



// UNDERSTANDING THE CONCEPT OF PROMPT AND HOW TO CONVERT STRING TO NUMBER
let number1 = prompt("Enter number 1");
let number2 = prompt("Enter number 2");

let realnumber1 = Number(number1);
let realnumber2 = Number(number2);

console.log(realnumber1+realnumber2);


// 4.) Undefined
// this means to create a variable and do not initialise with any value
let undef 
console.log(undef); 


// 5.) Null
// when you want to keep the variable empty then it is classified as null
let null_var = null
console.log(null_var);


// Concept of Hoisting
// Hoisting means that if some variable is created later on and it is printed earlier then it means that the js will automatically take the variable to the top creating it a priority and thus giving us the output undefined 
console.log(z);
var z = 100;
console.log(z);
// first it will give the output undefined as it only takes awway the variable z up not its value and then it is 100 because value was declared first before the printing of variable the next time



// Concept of ifelse block
 var x= 23;
var y = 23;
if (x == y) {
    console.log('YES')
}
else{
    console.log("FUcking no");
}




let units = Number(prompt("Enter your bijli k bill units"))
let bill;
if (units>100) {
    bill = units*10;
}
else if(units>50){
    bill = units*8
}
else{
    bill = units*5;
}

console.log(bill);



let whilee = 1;
while(whilee<10){
    console.log(whilee);
    whilee++;
}