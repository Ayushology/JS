//Q1.) What is a function 
function greet(){
    console.log("Namaste Bharat");
    
}
greet();
greet();
greet();
greet();
greet();
greet();


// Q2.) Why a function
// This is made when you do not need to use that block of code immediately but in the whole span you'll need it and also to reuse it


// q3.) Why do  we need a function
// It is used when it is very difficult to rewrite the same long piece of code and to save that time. We need a function

// Q4.) How to create a fxn
function name(){

}

// Q5.) How to call a function

// nameoffxn();

// Q6.) What is a parameter
// Parameter is that part that we pass into the function while calling it

function greetings(chacha){
    console.log("namaste "+chacha);
    
}
greetings('chacha');
greetings('tau');
greetings('taiii');
greetings('bua');

// Q7.) types of  functions or ways to write functions

// a.) function statement
function abcde(){

}

// b.) function expression
var abcd = function(){

}

// c.) Anonymous fxn
// function(){

// }

// d.)fat arrow fxn
// ()=>{};

// e.) fat arrow with implicit return
var fat = ()=>12;

var answer = fat();


// Q8.) rest parameters

function rest(a,b,c,...restelts){
    console.log(a,b,c,restelts);
    
}
// the elements that are included in the rest elements are placed in an array

rest(1,2,3,4,5,6,7,9,8);