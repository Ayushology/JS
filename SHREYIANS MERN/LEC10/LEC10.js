// Q1 Create a function that takes a callback and executes it after every `n` seconds indefinitely.

function barbarchalo(fnc,time){
setInterval(fnc,time)
}
barbarchalo(function(){
    console.log("hi hello");
    
},5000000)
// when youll run the code change zero to 2000


// Q2 Implement a function that returns a function with a preset greeting

function greetingsetup(greetings){
return function(name){
console.log(`${greetings} ${name}`);

}
}

let indian = greetingsetup("Namaste");
indian("Ayush");

let spanish = greetingsetup("Hola")
spanish("Ira"); 



// Q3. Implement a function that takes a callback and only executes it once (HOF + Closure)

function ekbaarchalao(fnc){
    let executed = false;
    return function(){
        if(!executed){
            executed = true;
            fnc();
        }
        else{(console.error("ek baar chala toh dia")
        )}
    }
}
let newfnc= ekbaarchalao(function(){
    console.log("ek hie baar chalunga");
})
newfnc();
newfnc();//this shows that whatsover times youll run this fnc no matters what but it will execute only once
newfnc();
newfnc();


// Q4. Implement a function that throttles another function (HOF + Closures).
function throttle (fnc,delay){
    let lastcall = 0;
    return function (){
    let current = Date.now();
    if(current-lastcall >= delay){
        lastcall = current;
        fnc();
    }
    }
}
let newfncc= throttle(function(){
    console.log("Will execute in 2seconds");
    },2000)

    newfncc();
    // now in the console copy this newfncc and paste it there multiple times u will note that it will work only after 2 seconds, untill 2 seconds have passed away it will show you undefined only.. give it a try