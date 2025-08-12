console.log('WHAT IS THE PROBLEM')
console.info("hi")
console.warn('be alert')
console.error('error found')
let name = prompt("Enter your name");
alert("FUCK U");
let response = confirm("are u sure");
let a = 10;
console.log(a)

let b = 20
let c = 23;
console.log(a,b,c)

console.log('value of a+b is',a+b,'understood and more than',c)


// var
var x = 10;
var x = 20; // ✅ re-declaration allowed

// let                                                                                                            
let y = 10;
// let y = 20; ❌ SyntaxError: Identifier 'y' has already been declared

// const
const z = 30;
// z = 40; ❌ TypeError: Assignment to constant variable

// Use **let** for variables that will change.

// Use **const** for variables that should not change.

// Avoid **var** in modern JavaScript due to scoping and hoisting quirks.
