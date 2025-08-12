// FOR EACH LOOP
let arr1 = [1,2,3,4,5];
arr1.forEach(function(value){
  if (value>2) {
    console.log(value);
    
  } 
})
// in foreach loop you donot apply return 

// MAP
let arr2 = [1,2,3,4,5];
let arrr2 =arr2.map(function(value){
    return "hi bro" //u can even return a number
})

// Map creates a blank array and stores values that the map mapes into it

// FILTER
// filter makes a new array and the input is dependent on two cases :true or false

let arr3 = [1,2,3,4,5];
let ans = arr3.filter(function(value){
    return false;
})
// in case of false it returns a blank array

let arrr3 = [1,2,3,4,5];
let anss = arr3.filter(function(value){
    return true;
})
// in this case the array will be full of all the values


// now lets take a example of the usecase of filter

let arr4 = [1,2,3,4,5];
let ansarr4 = arr4.filter(function(value){
    return value >2;
})
// it will return values that will satisfy the condition ie true

// REDUCE
let arr5 = [1,2,3,4,5];
let ansarr5 = arr5.reduce(function(accumulator,key)
{
    return accumulator*key;
    
},1)



let arrrr5 = [1,2,3,4,5];
let ansarrr5 = arr5.reduce(function(accumulator,key)
{
    return accumulator+key;
    
},0)


// Q11
let i = 10;
while (i>0) {
    console.log(i);
    i--;
    
}

// Q12

let j = 3;
while (j<=30) {
    console.log(j);
    j+=3;
    
}

// Q13
let sum = 0;
for (let k = 0; k <= 100; k++) {
    sum = sum+k;

}
console.log(sum);


// Q15

let string  = "JAVASCRIPT";
for(let char of string){
    console.log(char);
    
}
// Understanding the concept of copying an array
let brr = [1,2,3,4,5,6];
// so if we need to copy these same elements in another array then we need to use the spread operator instead of directly writing like let crr = brr;
// this way is completely wrong because if we apply any changes to crr, the same changes will be applicable to brr also that is completly wrong way to do so
// so to avoid this we use spread operator

let crr = 
[...brr];


// Q16 Remove duplicate values from an array.

let array = [1,2,2,2,1,3,4,5,5,4,3,3,2,5,4,3];
let answer =  [...new Set(array)]
// set returns the data but without an array.
// to convert it back into an array we need to use spread operator


// Q18. Sort an array in descending order.

let arrayy = [1,3,5,7,2,4,9];
let ansarrayyy = arrayy.sort(function(a,b){
  return b-a;
})
// can be done as
// let ansarrayyy = array.sort((a,b)=> b-a);

// Q17. Find the second largest number in an array.
let large_array = [1,2,3,4,3,2,1,5,6,7,8,4,2,9,11,11,9,10];
let answerrr = [...new Set(large_array)];
answerrr.sort(function(a,b){
    return b-a;
})
let second_largest = answerrr[1];


// Q19. Reverse an array without using .reverse().
let st_array = [1,2,33,42,12,21,55,63,73,99];
let rev_array = [];
for(var l = st_array.length-1; l>=0 ; l--){
    rev_array.push(st_array[l])
    
}
// we use st_array.length-1 because whatsover be the length the index of the array will always be running less than the length.


// Q20 Find the most frequent element in an array.

// before finding the most frequent element we need to first learn how to find the frequency of the elements
let freqarray = [1,2,2,3,1,5,6,7,8,8,8,8,4,5,6,7,8];
let obj = {};
freqarray.forEach(function(val){
    obj[val] === undefined ? (obj[val]= 1) : obj[val]++;
})
console.log(obj);



