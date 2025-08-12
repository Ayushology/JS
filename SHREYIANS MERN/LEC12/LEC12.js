// using Math.random
// it generates a random number between 0 and 1 and by multiplying it by 10 it increases its range
// var num = Math.random()*10 ;
// console.log(num);
// using math.floor
// // it converts the random number into a whole number
// var num2 = Math.floor(num);
// console.log(num2);



var btn = document.querySelector('button');
var box = document.querySelector("#box");

btn.addEventListener('click',function(){
   var a = Math.floor(Math.random()*256);
   var b = Math.floor(Math.random()*256);
   var c = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${a},${b},${c})`
    
})