var button = document.querySelector('#togglebtn');
var image = document.querySelector('#img');


let flag = 0;

button.addEventListener('click', function() {
    if(flag == 0) {
        image.src = "https://images.unsplash.com/photo-1724188439186-508eb148d45c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        button.innerHTML = 'Turn It Off';
        flag = 1;
    }
    else {
        image.src = "https://images.unsplash.com/photo-1647132638027-0ff50f6a480f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        button.innerHTML = 'Turn It On';
        flag = 0;
    }
});
 
