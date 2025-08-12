var h1 = document.querySelector('h1');

var att = h1.getAttribute('id');
console.log(att);


h1.setAttribute('id','heroine')

var img1 = document.querySelector('#dog');
var img2 = document.querySelector('#lion');
var btn = document.querySelector('#swap');

btn.addEventListener('click',function(){
   var img1src = img1.getAttribute('src');
   var img2src = img2.getAttribute('src');

   img1.setAttribute('src',img2src);
   img2.setAttribute('src',img1src);
    
})

var image = document.createElement('img');
image.setAttribute('src','https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fHww')
image.style.height = '200px'
document.body.appendChild(image);
image.style.marginTop = '30px'
image.style.border = "5px solid black";
image.style.borderRadius = '20px'
image.style.borderColor = 'black'