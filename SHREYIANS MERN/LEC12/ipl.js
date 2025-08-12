let arr = [{
    team: "CSK",
    primarycolor : "Yellow",
    secondarycolor : "green"   
},
{
    team: "RCB",
    primarycolor : "Red",
    secondarycolor : "Black"   
},
{
    team: "MI",
    primarycolor : "BLUE",
    secondarycolor : "grey"   
},
{
    team: "KKR",
    primarycolor : "Purple",
    secondarycolor : "Black"   
},
{
    team: "SRH",
    primarycolor : "Orange",
    secondarycolor : "Black"   
},
{
    team: "GT",
    primarycolor : "VIOLET",
    secondarycolor : "black "   
},

];

var h1 = document.querySelector('h1');
var btn = document.querySelector('button');

btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length);
   var winner = arr[num];
   h1.innerHTML = winner.team;
h1.style.backgroundColor = winner.primarycolor;
h1.style.color = winner.secondarycolor;
    
})


