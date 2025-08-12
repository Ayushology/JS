var btn1 = document.querySelector("#btn1");

btn1.addEventListener("click",function(){
    location.href ="https://www.sheryians.com/"
})


var btn2 = document.querySelector('#btn2');

btn2.addEventListener("click",function(){
    location.reload();
})

var btn3 = document.querySelector('#btn3');

btn3.addEventListener("click",function(){
    history.back()
})
var btn4 = document.querySelector('#btn4');

btn4.addEventListener("click",function(){
    history.forward();
    
})


// localStorage.clear()
// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()

// u cannot store array of objects in the local storage.. for that u need to use
// suppose earlier the array of objects was under name users

// now u need to create the new variable 
// newUsers = JSON.stringify(users);

// localStorage.setItem('user',newUsers)


// to revert the process use JSON.parse(newUsers)

var div = document.querySelector('div');

div.classList.add('circle')

// div.classList.remove('circle)
// div.classList.toggle()= this is used to  remove if already there and if not there it adds it on