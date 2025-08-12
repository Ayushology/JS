// Q1.) 
console.log( "Hello, JavaScript!");
console.warn( "Hello, JavaScript!");
console.error( "Hello, JavaScript!");
console.info("Hello Javascript !")
console.table({
    name : "Ayush" , 
    age : 18
})

// Q2.)
var result = 35 * 2 - (10 / 2) + 7;
console.log(result);

// Q3
// a.  "123" String b. 123 number c. true- boolean d. null
console.log(typeof "123");
console.log(typeof 123);
console.log(typeof false);
console.log(typeof null );

// Q4
// USIng a temporary variable
var a = 10;
var b = 12;
var c;
c=a;
a=b;
b=c;
console.log(a,b);

// Modern way of swapping in JS
[e,f] = [10,12];
[e,f]= [f,e];
console.log(e,f);


// Q5 Concept of  groups
console.group("Hisab Kitab");
console.log("khana = 50");
console.log("chai = 10");
console.log("auto = 120");
console.groupEnd();
// By default this list of items will be automatically opened once we open the console... to avoid this in the beginning we write groupcollapsed instead of group

console.groupCollapsed("Pichle mahine ka hisab");
console.log("kiraya = 3000");
console.log("chai =200");
console.log("ana jana = 500");
console.groupEnd();


// Q6.) 
const person = {
    Name : "Ayush",
    Age: 18,
    Email : "ayush@gmail.com"
}
person.Email = "ayushh@gmail.com"
person.Age = 55;
person.Weight = 80;

console.log("Updated details are ", person);

// if you want that the values in the object should not get modified by someone else
    // write Object.freeze(name of the object)


// Q7 Ways to convert a string into a number

// 1 By using Number
let string = "50";
let number1 = Number(string);

// 2 By using parseInt

let number2 = parseInt(string);


// 3. By using unary operator that is "+"

let number3 = +string;


// Q8. Check if "JavaScript" contains "Script" without using .includes()


let String1 = "javascript";
console.log(String1.indexOf("script"));

// if the searched thing is there then it will give you the index of that searched thing and here script is starting from 4rth index so it will give you 4


let string2 = "Javascript";
console.log(string2.indexOf("scriptaaa"));


// If the searched part is not there in the string then it will return -1 



let string3 = "Ayush";
console.log(string3.indexOf("sh")!==-1);
// it means if the searched thing is not there in the string then it will give true


// Method 2 using search 

let string4 = "periodic table"
console.log(string4.search("period")!==-1);



// Q9. 
let array = [5,10,15,20,25,30];
let sum = array.reduce((accumulator,currentvalue)=> accumulator+currentvalue,0)
console.log(sum);
