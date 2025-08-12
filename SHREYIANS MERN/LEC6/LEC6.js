// what is an array
// An array is a data structure used in programming to store multiple values of the same type in a HETEROGENOUS variable, organized in a contiguous block of memory.


// ways to create an array

// 1.) Blank Array
var arr1 = [];

// 2.) Small Array
var arr2 = [1,2,3,4,5];

// 3.) Huge Data Array
var arr3 = new Array(100)


// 4.) using loops

var arr4 = new Array(30);

for( var i = 0; i< arr4.length;i++){
    arr4[i]=i;
}

//5.) In all the languages the values in the array is homogenous but in js we can use different datatypes in the same array

var arr5 = [1,"A",undefined,NaN,function(){},[]];



// OBJECT
// It is a set of key value pair seperated by commas 

var Ayush = {
    Name : "Ayush",
    Height : "5'11",
    Weight : 75,
    Age : 18

}
// why an object
// It is used when we need to store many characterstics of the same thing then we use object 
 

// Ways to create an object 
var obj1 = {}

var obj2 = new Object();

// To access an object use "dot(.)"

var obj3 = {
    Name : "Ayush",
    Height : "5'11",
    Weight : 75,
    Age : 18,
    Married : "Soon"
}
obj3.Married = "YES"
