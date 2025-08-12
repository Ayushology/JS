var button = document.querySelector('button')
var h5 = document.querySelector('h5');
var card = document.querySelector('#card')
var flag = 0 ;

button.addEventListener('mouseover',function(){
  if(flag==0){
     h5.innerHTML = 'Friends'
   h5.style.color = 'green'
   button.innerHTML = 'Remove friend'
   button.style.padding = '20px'
   flag =1;
  }
  else{
      h5.innerHTML = 'Stranger'
   h5.style.color = 'red'
   button.innerHTML = 'Add friend'
   flag = 0;
  }
})
