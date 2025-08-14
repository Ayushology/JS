class MobileShop{
    constructor(){
        this.mobiles = [];
    }
    addMobile(mobile){
        this.mobiles.push(mobile)
    }
    listofallMobiles(){
        this.mobiles.forEach(function(mb){
           console.log( `${mb.brand} - ${mb.price} - ${mb.id} - ${mb.color}`);
           
        })
    }
}
class Mobile{
    constructor(brand,price,color){
        this.id = Math.floor(Math.random()*10000);
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.sims =[];
    }
    getmobileinfo(){
       console.log( `${this.brand} - ${this.price} ${this.color}`);
       
    }
    insertSim(sim){
        if (sim==2) {
            console.log("Already 2");
            return;
        }
        this.sims.push(sim);
    }
}

class Sim{
    constructor(brand,balance){
        this.brand = brand;
        this.balance = balance
    }
    addBalance(balance){
        this.balance += balance;
    }
}

let mymobileshop = new MobileShop;

let samsung = new Mobile("Samsung",20000,"black");

let jio = new Sim("Jio",999);

samsung.insertSim(jio)
mymobileshop.addMobile(samsung)

let mydusriMobileshop = new MobileShop;

let iphone = new Mobile ("Iphone",20000, "Red");

let airtel = new Sim("Airtel", 3000);

iphone.insertSim(airtel);

mydusriMobileshop.addMobile(iphone);