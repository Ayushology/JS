var characters = [

{
    name : "Doremon",
    url : "https://imgs.search.brave.com/uEw3keyNsD-ESYbyn99uL6DONWszfVXZhd7QmUSOuQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NkL2Jj/Lzg0L2NkYmM4NDkw/YjQ5NmUwOTA2Zjcx/NDk3ZWI1MzExMjJh/LmpwZw"
},
{
    name : "Nobita",
    url :  "https://imgs.search.brave.com/bW5HcaOxJ-TATyqKVUl1fka19XRs68j56FEvWD-4VQk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDYzNTY5/ODkuanBn"
}
,
{
    name : "Shizuka&Nobita",
    url : "https://imgs.search.brave.com/Q8RVJyxzmbap0AkXAKycYjNq3w6D-PhGzZOPbqWKS6U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvc2Ny/ZWVuc2hvdC1vZi1j/dXRlLW5vYml0YS1h/bmQtc2hpenVrYS1t/b21lbnQtaG42cW80/ZDVxczJ5c2Jndy5q/cGc"
},
{
    name : "Shizuka",
    url : "https://imgs.search.brave.com/pwYft2zS8Xu35E7Vo-ZsmacuOnL9AO-M4K5kgHkvTSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NydXNoLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvU2hpenVr/YS1JbWFnZXMuanBn"
},
{
    name: "Suneo",
    url : "https://imgs.search.brave.com/bgoH-GEL7A0XcHgWg_FuBqnoNaoUJz2KmrpMt7MfWWE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTEx/Mjk1NzMucG5n"
},
{
    name : "Gian",
    url : "https://imgs.search.brave.com/Q18g5vrNx0MTlwMmJbr3QizXjX-OZDzpY5rQbi4DO_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbTEu/YW1pbm9hcHBzLmNv/bS82ODI0LzQzNTI1/Njc5NmI0ZTY2OTYx/ODIwMGRmYTg3M2Zi/NzIwOTliMzc3N2R2/Ml9ocS5qcGc"
},
{
    name : "Gang",
    url : "https://imgs.search.brave.com/VWk60VHpTDLwJD08jw6_Qn9UsFUdqm4gW9zzcu-lofY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93YzE2NzM2/NTguanBn"
}
,{
    name: "Doremi",
    url : "https://imgs.search.brave.com/5Tu-UJEcrWkHqyrlDeaT8hGNtGVUgo2DDlJjESZtjkg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Rv/cmFlbW9uL2ltYWdl/cy81LzViLzE1LTEy/LTIwMTlfKDIpLnBu/Zy9yZXZpc2lvbi9s/YXRlc3Qvc2NhbGUt/dG8td2lkdGgtZG93/bi8yNjc_Y2I9MjAx/OTEyMTUyMTE4NTQm/cGF0aC1wcmVmaXg9/ZW4"
},
{
    name : "Dekisugi",
    url:"https://imgs.search.brave.com/pzblBP7L8ybyktV14oG_Dplvi10NgbnlwasYdWkQ5cQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rZW5o/MTRjZG4uY29tL3Ro/dW1iX3cvNjYwLzIw/MzMzNjg1NDM4OTYz/MzAyNC8yMDIxLzYv/MTkvcGhvdG8tMS0x/NjI0MDk0ODY2MTg5/OTM1NTgzNTMyLnBu/Zw"
},
{
    name: "Nobisuke Nobi"
    ,
    url : "https://imgs.search.brave.com/vzUPac00gQruJyJuXlIKdJ7dGf9YWgVnbgDBKcHrW4I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2U5/MjFhYjgzLWMzMTEt/NDMxYi05NzFmLWM4/YzdmODc0MzViOC9k/ZnZyaXd5LTIzZGZm/MWJiLWEyNjctNGIy/YS1iNzFkLTM4ZWQ2/ZmJkMGZlOS5wbmcv/djEvZmlsbC93XzEy/ODAsaF8xODc5L25v/YmlzdWtlX25vYmlf/YnlfY2FybG9zbWVu/ZXJhMjAyMF9kZnZy/aXd5LWZ1bGx2aWV3/LnBuZz90b2tlbj1l/eUowZVhBaU9pSktW/MVFpTENKaGJHY2lP/aUpJVXpJMU5pSjku/ZXlKemRXSWlPaUox/Y200NllYQndPamRs/TUdReE9EZzVPREl5/TmpRek56TmhOV1l3/WkRReE5XVmhNR1F5/Tm1Vd0lpd2lhWE56/SWpvaWRYSnVPbUZ3/Y0RvM1pUQmtNVGc0/T1RneU1qWTBNemN6/WVRWbU1HUTBNVFZs/WVRCa01qWmxNQ0lz/SW05aWFpSTZXMXQ3/SW1obGFXZG9kQ0k2/SWp3OU1UZzNPU0lz/SW5CaGRHZ2lPaUpj/TDJaY0wyVTVNakZo/WWpnekxXTXpNVEV0/TkRNeFlpMDVOekZt/TFdNNFl6ZG1PRGMw/TXpWaU9Gd3ZaR1oy/Y21sM2VTMHlNMlJt/WmpGaVlpMWhNalkz/TFRSaU1tRXRZamN4/WkMwek9HVmtObVpp/WkRCbVpUa3VjRzVu/SWl3aWQybGtkR2dp/T2lJOFBURXlPREFp/ZlYxZExDSmhkV1Fp/T2xzaWRYSnVPbk5s/Y25acFkyVTZhVzFo/WjJVdWIzQmxjbUYw/YVc5dWN5SmRmUS56/eU8xR0pRaGZJeDRE/eHhQS3JCTUN2Zk4y/clNQT0JVeXJMRDZu/bUVyU0xF"
},
{
    name : "Tamako Nobi" ,
    url : " https://imgs.search.brave.com/773K7bzkO7-B6oAgCPoYSoac-2V0e6U4K8XlrQnGhsw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudHZ0cm9wZXMu/b3JnL3Btd2lraS9w/dWIvaW1hZ2VzL3Rh/bWFrb180LnBuZw"
}
]



var charimage = document.querySelector('#character-image');
var charname = document.querySelector('#character-name');
var button = document.querySelector('button');

function randomImagegenerator(){
    var random_Index = Math.floor( Math.random()*characters.length);
    var random_character = characters[random_Index];
    charimage.src = random_character.url;
    charimage.alt = random_character.name;
    charname.textContent = random_character.name;
}

button.addEventListener("click",randomImagegenerator);


window.onload = randomImagegenerator;