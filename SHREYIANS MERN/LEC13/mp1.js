var button = document.querySelector('button');
var h5 = document.querySelector('h5');
var part2 = document.querySelector("#part2")
var grow = 0;
button.addEventListener('click',function(){
  var int =   setInterval(function(){
     grow++;
        h5.innerHTML = grow + "%" 
        part2.style.width = grow + "%"
    },50)

    setTimeout(function(){
        clearInterval(int);
        button.innerHTML = "Downloaded"
        button.style.opacity = .5;
    },5000)
})