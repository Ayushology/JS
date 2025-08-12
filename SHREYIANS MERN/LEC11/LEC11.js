// DOM DOCUMENT OBJECT MODEL


// - selection of an element
// - changing html
// -changing css
// - Event listener

var h1 = document.querySelector('h1') //selection
h1.innerHTML = 'Hello'                 // changing html
h1.style.color = 'blue'
h1.style.background = "red"
 var events = false;
h1.addEventListener('click',function(){
   if(events==false){
     h1.innerHTML="NUTAN"
    h1.style.color = 'green';
    h1.style.background = "yellow"
    events = true;
   }
   else{
    h1.innerHTML = 'HELLO'                 // changing html
h1.style.color = 'blue'
h1.style.background = "red"
events = false;
   }
})
var boxevent = false;

var box = document.getElementById('box')
box.addEventListener('click',function(){
    if(boxevent== false){
        box.innerHTML = 'honey '
    box.style.color = 'red'
    box.style.background = 'yellow'
    boxevent = true;
    }
    else{
          box.innerHTML = 'yo '
    box.style.color = 'white'
    box.style.background = 'blue'
    boxevent = false;

    }
})

// var h2 = document.querySelectorAll('h2');
// h2.forEach(function(element) {
//     element.addEventListener('click', function(){
//         element.innerHTML = 'BHOOM'
//     })
// })

var h2 = document.querySelectorAll('h2');
h2[0].innerHTML = 'yo'      // because query selector all selects it in the form of node list  so it accesses it in the form of indexces of array