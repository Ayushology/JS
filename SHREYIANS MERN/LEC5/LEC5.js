//1.) IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
var ans = (function abcd(){
    var a = 12;
    return a;
    
})();
// IIFE means that we are immediately runing an invoked function but what is the need of the function then
// the reason is that the variables that are made inside the fxn are private variables and cant be accessed through the console. so the variables are safe and no one can access them through the console


// 2.) HOF'S 
// the functions which either return any function or accept any function in parameter or does both these tasks then it is called an hof

function hof(){
return function(){
    console.log(" return type hof hu main");
    
}
}
hof()();
// mtlb ye hai ki function no 1 ko bulaya toh uske andar ek or function tha toh ek or fxn ko call krna pda tbhi  do bAar ()() lagana pda......
// this is the concept of type 1 of hof ie return type


// type 2 ie accept a fxn

function accepthof(fnc){
        fnc()
}

accepthof(function(){
    console.log("accept type hof bro");
    
})


// 3.) CALL BACK FUNCTION

function callback(val){
val();
}

callback(function(){
    console.log("The fxn that is going inside is the call back fxn and the one that is accepting this fxn is called hof  ");
    
})

// The fxn that is going inside is the call back fxn and the one that is accepting this fxn is called hof 


// 4.)FIRST CLASS FUNCTION

// Specifically, a function is "first-class" because it can be:
// Assigned to a variable.
// Passed as an argument to another function.
// Returned as a value from another function.
// Stored in data structures like arrays or objects.
// This capability is a core reason for the power and flexibility of JavaScript.


// 5.) pure fxn -  that doesnt change any value of the external variable
// 6.) impure fxn - that change the value of the external variable


// 7.) global scope and local scope 
// the one that can be accessed anywhere is called a global scope. whether inside a fxn or something
// eg var a =  12;                  without curly braces thenit is declared globally

// on the another hand if the variable can accessed only within the curly braces thenit is called local scope