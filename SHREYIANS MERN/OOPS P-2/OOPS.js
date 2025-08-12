// jab bhi constructor banaoge or usme koi ek value sbke liye same hogi toh uss value ko constructor me rkhna galat practice hai isliye
// iska sahi tareeka hai prototype ko use krna kyuki prototype me save krne par saara new instances automatically by default tumhare proto ki value ko store krnge

class Toffee{
    constructor(name){
        this.name = name;
    }
}
Toffee.prototype.price = 3;

let t1 = new Toffee("aampanna");
let t2 = new Toffee("kiss me");

class Human{
    constructor(name,age,married_status){
        this.age = age;
        this.name = name;
        this.married_status = married_status;
    }
}
Human.prototype.sayHello= function(){
    console.log("hi");
    
}

let h1 =new Human("Ayush",19,false)

// sbse phele koi bhi property ko apke object m dhundenge nhi mila toh prototype me dhundte h


class Chips{
    constructor(name,price){
        this.name ="#)"+ name;
        this.price ="$"+ price;
        this.printmyname = function(){
            console.log(this.name);
            
        }
        this.printmyprice = function(){
            console.log(this.price);
            
        }
    }
}

var c1 = new Chips("Lays",10);
var c2 = new Chips("Kurkure",20);



class Employee{
    constructor(name,id,salary){
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
}

Employee.prototype.printmydetailss = function(){
    console.log(`${this.name} is my name and ${this.id} is my id and ${this.salary}  is my salary`);
    
}

let e1 = new Employee("Ayush",1234,100000)