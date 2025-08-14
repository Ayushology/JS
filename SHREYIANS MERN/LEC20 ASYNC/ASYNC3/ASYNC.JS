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