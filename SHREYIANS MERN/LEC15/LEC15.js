let arr = [
    {
        name: "Salman Khan",
        age: 60,
        marriedstatus: false,
        image: "https://imgs.search.brave.com/iq6NDpd49_Pqyd16ALdBd_XDwrzp8FqdUci8FiHEJag/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNTYy/OTI0OS5qcGc"
    },
    {
        name: "Rahul Gandhi",
        age: 55,
        marriedstatus: false,
        image: "https://imgs.search.brave.com/uXeY66sDQOLwXs3Ccr5uXkiA2gkL65w9G_urIJ58y0o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDM3/Mzg1Ny5qcGc"
    },
    {
        name: "Ayush Kumar",
        age: 19,
        marriedstatus: false,
        image: "./ayush.jpg"
    },
    {
        name: "Narendra Modi",
        age: 75,
        marriedstatus: true,
        image: "https://imgs.search.brave.com/fLkQOpvOxfSnegY5ChzWe1n929HWLrVUqvD2tDmUIqo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/MTI5NTYwNC9waG90/by90b3BzaG90LWlu/ZGlhcy1wcmltZS1t/aW5pc3Rlci1uYXJl/bmRyYS1tb2RpLWxl/YWRlci1vZi10aGUt/cnVsaW5nLWJoYXJh/dGl5YS1qYW5hdGEt/cGFydHkuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPURNcEhK/Tk9DSlAtNGFzVmNu/Mm9uOU51M2pMUVJv/R3o5RXplRXBEVzhv/bTg9"
    },
    {
        name: "Arvind Kejriwal",
        age: 58,
        marriedstatus: true,
        image: "https://imgs.search.brave.com/wR9t-VlYBkz1ELWoD72Z7OEjrnCmh-0f0JnR7Ru3M1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbmRp/YW5tZW1ldGVtcGxh/dGVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvYXJ2aW5kLWtl/anJpd2FsLXRoaW5r/aW5nLmpwZWc"
    },
    {
        name: "Nutan Devi",
        age: 46,
        marriedstatus: true,
        image: "./nutanji.jpg"
    },
    {
        name: "Dinesh Kumar",
        age: 45,
        marriedstatus: true,
        image: "./dineshji.jpg"
    },
    {
        name: "Akanksha Kumari",
        age: 16,
        marriedstatus: false,
        image: "./akankshaji.jpg"
    }
];

var sum = ``;

arr.forEach(function(element) {
    sum += `
    <div class="card">
        <img src="${element.image}" alt="">
        <h1>${element.name}</h1>
        <h5>${element.age}</h5>
        <h4>Married: ${element.marriedstatus}</h4>
        <div class="status-and-button">
            ------------------
          <h5 class="stranger-status">Stranger</h5>
          ------------------
          <button class="add-friend-button">Add Friend</button>
        </div>
    </div>`;
});

document.body.innerHTML = sum;

document.body.addEventListener("click",function(event){
    const clickedbutton = event.target;

    if(clickedbutton.classList.contains('add-friend-button')){
        const card = clickedbutton.closest(".card");

        if(card){
            const statuselt  = card.querySelector('.stranger-status')
            if(statuselt.textContent === "Stranger")
            {
                statuselt.textContent = 'Friends';
                statuselt.style.color = 'green';
                clickedbutton.textContent = 'Remove friend'
            }
            else {statuselt.textContent = "Stranger";
            
                statuselt.textContent = 'Stranger';
                statuselt.style.color = 'red';
                clickedbutton.textContent = 'Add friend'
            
            }
            }
        }
    }
);