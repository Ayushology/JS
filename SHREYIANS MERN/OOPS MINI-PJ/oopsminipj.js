class Library{
    constructor(){
        this.books = [];
    }
    addBooks(book){
        this.books.push(book);
    }
    listAllbooks(){
        this.books.forEach(function(book,index){
            console.log(`${index+1}) ${book.name} at ${book.price}`);
            
        })
        
    }
}
class Book{
    constructor(name,id,price){
        this.name = name;
        this.id = id;
        this.price = price;
        this.status =false;
    }
    info(){
        console.log(`${this.name} is the name of the book with ${this.id} id and you have ${this.readStatus ? "read it": "not read this book"} and  price is ${this.price}`);
        
    }
    readStatus(){
        this.readStatus = !this.readStatus;
        
    }
}

let book1 = new Book("science",21221,120)
let book2 = new Book("maths",21429,12000)
let book3 = new Book("sst",89221,10920)
let ambalaLibrary = new Library();

ambalaLibrary.addBooks(book1)
ambalaLibrary.addBooks(book2)
ambalaLibrary.addBooks(book3)