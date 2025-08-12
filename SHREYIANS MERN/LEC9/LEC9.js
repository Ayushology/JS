// what is a closure
// if we create a function and a return type fxn is created within it and a variable is created within the parent function and that parent variable is used within the return tyoe fxn then that is reffered to a closure

function abcd(){
    let a = 12;
    return function(){
        console.log(a);
        
    }
}
abcd();

// Q1 Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

function delayedexecution(Callback){
    setTimeout(Callback,3000)
}

delayedexecution(function(){
    console.log("EXecuted in 3 seconds");
    
})

// Q2 Implement your own version of `.map()` as a higher-order function.
let arr = [1,2,3,4,5,6,7]
function mapkicopy(arr,fnc){
    let newarr = [];
    for(let i=0 ; i< arr.length ; i++){
        newarr.push(fnc(arr[i]))
    }
return newarr;
}
console.log(mapkicopy(arr,function(val){
    return val+3;
}));  



// 3. make your counter using the variable counter
function counter(){
    let count = 0;
    return function(){
        console.log(++count);
        
    }
}
let counter_count = counter();
counter_count();
counter_count();
counter_count();


// Q4 Implement a function that limits how many times another function can be called (Closure + HOF).

function fxnlimiter(fnc,limit){
    let total=0;
    return function(){
        if(total<limit){
            total++;
            fnc();
        }
    }
}
let limited_count = fxnlimiter(function(){
    console.log("heyaaa");
},3)

limited_count();
limited_count();
limited_count();
limited_count();//THIS called fxn is of no use as it has excedded the limit of 3.

