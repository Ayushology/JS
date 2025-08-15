// 1. Simulate a food deivery 

// task: Create a function "orderFood" that returns a Promise. It should resolve after 2 seconds with "Pizza delivered!"

// Bonus: add ac chance to reject with "delivery failed!"

function orderFood(){
   return new Promise(function(resolve,reject){
    setTimeout(function(){
        let chance = Math.random()< 0.7;
    if (chance) {
        resolve();
    }
    else reject();
    },2000)
    })
}

orderFood().then(function(){
    console.log("Pizza delivered!"
)
}).catch(function(){
    console.log("Delivery Failed");
    
})

// 2.) Chained Promises : users -> posts-> comments

// Task:
// 1. Create getUser() -> resolves with {id: 1, name : "Ayush"}
// 2.) getPosts(userId) -> resolves with list of post titles
// 3.)getcomments(postId) -> resolves with comments

// Chain them together using .then() and log the final output


function getUser(){
    return new Promise(function(res,rej){
     setTimeout(function(){
           res({id: 1, name : "Ayush"})
     },1000)
    })
}
    function getPosts(userId){
        return new Promise(function(res,rej){
            setTimeout(function(){
                res(["Tittle 1","Tittle 2"])
            },1000)
        })
    }

    function getcomments(postId){
        return new Promise(function(res,rej){
            setTimeout(function(){
                res(["well done","good","marvellous"])
            },1000)
        })
    }

    getUser().then(function(data){
        console.log(data);
       return getPosts(data.id);
    }).then(function(titles){
        console.log(titles);
        return getcomments("jdkasj");
        
    }).then(function(cmts){
        console.log(cmts);
        
    }).finally(function(){
        console.log("All data fetched");
        
    })


    // 3. Fake API call

    // task: 
    // Write a function fake api call (endpoint) that:
    // Accepts a string like users or posts
    // resolves with some dummy data after a random delay (1-3 sec)

    function FakeApiCall(endpoints){
        const data = {
            users : ["Ayush","Akanksha","kancha"],
            posts : ["amazing","superb","wonderful"]
        }
        var delay = Math.random*2000 + 1000;
        return new Promise(function(resol,rejec){
            setTimeout(function(){
                resol(data[endpoints])
            },delay)
        })
    }


    FakeApiCall("users").then(function(data){
        console.log(data);
        
    })
     FakeApiCall("posts").then(function(data){
        console.log(data);
        
    })
