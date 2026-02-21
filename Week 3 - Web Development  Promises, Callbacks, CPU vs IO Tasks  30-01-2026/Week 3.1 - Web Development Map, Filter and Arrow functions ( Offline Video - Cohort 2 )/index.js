//map , filter, arrow fns

//previous function
function sum(a, b) {
  return a + b;
}
const ans = sum(1, 2);
console.log(ans);

//arrow function
const sum = (a, b) => {
  return a + b;
};
const ans = sum(1, 2);
console.log(ans);

//map , filters

//given an array  , give me back a new array
//in which every value is multiplied by 2
//[1,2,3,4,5] -> [2,4,6,8,10]

//old way solution
const input = [1, 2, 3, 4, 5];
const newArray = [];

for (let i = 0; i < input.length; i++) {
  newArray.push(input[i] * 2);
}
console.log(newArray); // output [2, 4, 6, 8, 10]

//another way to solve this problem:

//map : what it does : it takes a function as an input and returns a new array with the output of that function for each element in the input array

function transform(i) {
  return i * 2;
}
const input = [1, 2, 3, 4, 5];

const ans = input.map(transform);
console.log(ans); // output [2, 4, 6, 8, 10]


//filter 
//given an array , give me back a new array
//in which every value is even numbers
//[1,2,3,4,5] -> [2,4]

//old way solution
const input = [1, 2, 3, 4, 5];
const newArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 === 0) {
    newArray.push(input[i]);
  }
}
console.log(newArray); // output [2, 4]

//another way to solve this problem:

//filter : what it does : it takes a function as an input and returns a new array with the output of that function for each element in the input array
//        : when to use : when you want to filter out elements from an array based on some condition
function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
const input = [1, 2, 3, 4, 5];
const ans = input.filter(filterLogic);
console.log(ans); // output [2, 4]

// example question : return names starts with "h"  

const arr=["harish","pratish","harkirat","mohit","rohit"]

const ans=arr.filter(function(n)){
    if(n.startsWith("h")){
        return true;
    }else{
        return false;
    }
}
console.log(ans);

//whats "startsWith" : it is a function that is used to check if a string starts with a specific character or not
//helper function of string class.  