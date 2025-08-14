// async code sbse phele web api me jata hai or waha resolve hota hai or ye code callback queue me chala jata hai or fir event loop check krta hai kya main thread khali hai ya ni agar hai toh unko execute krta hai

function one(cb) {
    console.log("one");
    cb();
}
function two(cb) {
    console.log("two");
    cb();
}
function three(cb) {
    console.log("three");
    cb();
}

one(()=>{
    two(()=>{
        three(()=>{
            console.log("all callbacks cleared");
            
        })
    })
})
// this is called callback hell     

// promises hum tb banate hai jab hume pta he na ho ki wo data hume kab milega
// promises use isliye hote hai ki jese agar humne data manga toh phele ye ni pta  ki data ayega ya ni aega

// agar data ajata hai toh bhot acha 
// promise me do chize hoti h reject or resolve
// suppose mene data manga instagram s ki ye mera username hai or toh ek condition toh ye hoskti h ki wo username mil jaye or promise ke resolve section me chle jaye ya username agar galat hua toh wo reject section m chli jyegi


var prom = new Promise(function(resolve,reject){
    console.log("insta se  data mangao");
    console.log("insta se  data fetch ho rha");
    console.log("insta se  data fetch ho gya");
    resolve()
    
})

prom.then(function(){
    console.log("resolved");
    
}).catch(function(){
    console.log("rejected");
    
})

// then tab chalega jab code sahi ho or catch tb chalga jab code galat ho


// callback hell using promises

function stepone(){
    return new Promise(function(res,rej){
        console.log("step1");
        res()
        
    })
}

function steptwo(){
    return new Promise(function(res,rej){
        console.log("step 2");
        res();
    })
}

function stepthree(){
    return new Promise(function(res,rej){
        console.log("step 3");
        res();
        
    })
}

stepone().then(steptwo).then(stepthree).then(function(){
  console.log(  "all steps done");
  
})


// function().then(function pass krna hota h) toh direct step two pass krdia