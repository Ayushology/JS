var button = document.querySelector("button");
var body = document.querySelector('body');

button.addEventListener("click",function(){
    var image = document.createElement('img');
    var x = Math.random()*90;
    var y = Math.random()*90;
    var rot =  Math.random()*360;
    image.setAttribute('src',"./gian mom.png");
    image.style.height = '200px';
    image.style.position = 'absolute';
    image.style.left = x + "%"; 
    image.style.top = y + "%"; 
    image.style.rotate = rot + "deg"
    body.appendChild(image)
})