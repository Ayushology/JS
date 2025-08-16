var btns = document.querySelectorAll(".button");
var body = document.querySelector("body");

btns.forEach(function(button){
   
    button.addEventListener("click",function(e){
       
     body.style.backgroundColor = e.target.id;

})
        
    })
    
