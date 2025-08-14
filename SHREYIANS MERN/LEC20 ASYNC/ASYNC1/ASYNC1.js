// everything in the js works in two ways either it is synchronous that means in an order or either it is in asynchronous manner

// how to identify async behaviour

// can use callbacks, promises, and async/await syntax
// can use timers (setTimeout, setInterval)
// can use fetch API for network requests
// can use WebSockets for real-time communication
// that's how we can identify async behaviour


console.log("hey");
setTimeout(function(){
    console.log("hey2");
    
},2000)
console.log("hey3");



// js sbse phele synchronous part ko run krti hai.. usko wo main thread pe run krti hai
// js single threaded hai 
// main thread pe hamsha synchronous code phele chlta h, jb ye pura code finish hoga tb async code ke chalne ki bari ayegi


// Main Thread-> Jaha par sync code chlta hai

// Main Stack -> jo kuch bhi main stack oe ayega wahi chalega

// Web Api -> browser ki taraf se hume kayi features milte hai jo js ke nhi hote , wo features js ke hote toh nhi hai lekin hum un features ko js me use krte hai or wo hume browser deta hai   [ on the console use window]

// sync code main thred me chlna chalu hojata hai or async code ko web apis behind the scenes operate krna chalu krdete h, jab ye code completion hojata hai tb ye move hojata hai callback queue mai



// recording me jake sun lena save kr rkhi h