// What is oops
//ese objects ko create krna jo sirf data hold na kre balki unki functionality ko bhi hold kre and that object with a blue print

// problem without oops
// if we need to create multiple objects lets say 100 then the problem  is that we need to create 100 objects that will take a lot of memory and then it will be not a good practice as its space complexity will also increase
// isse acha hoga ki hum ek nayi class banaye jisme nay naye objects banayegi or wo objects apna data khud  hold krnge or last me jitne methods honge wo data share krnge
 



// old way
function Toffee(name,price,expiry){
this.name = name
this.price = price
this.expiry = expiry
}

let t1= new Toffee("vanila","2","31/07/25");//first letter of function must be capital
let t2 = new Toffee("chocolate","5","30/03/2026")

 //  jab bhi function ko call krte time kabhi bhi new laga dia toh mann m ek blank object bna lo
 //  jab bhi fxn me this ko dekho turant us  blank object me place krdo 


//  NEW way of using oops

class Icecream {
    constructor(name,price,colour){
        this.flavor = name;
        this.price = price;
        this.colour = colour;
    }
}

var t3 = new Icecream("vanilla","20","white")
var t4 = new Icecream("chocolate","40","black")
var t5 = new Icecream("butterscotch","50","yellow")