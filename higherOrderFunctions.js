/* Ex. 1
  write a function called each which accepts two parameters:
   an array and a callback function. The each function should loop over
  the array passed to it and run the callback function on each element in it.
  */

function each(arr, fn){
    for (let i=0; i<arr.length; i++){
       fn(arr[i]);
    }
}

//test 1
each([1,2,3,4], function(val){
    console.log(val);
});
//1
//2
//3
//4

//test 2
each([1,2,3,4], function(val){
    console.log(val*2);
});
//2
//4
//6
//8


/* Ex. 2
Write a function called map which accepts two parameters: an array and a callback.
The map function should return a new array with the result of each value being 
passed to the callback function.
*/
function map(arr, fn){
    let newArr = [];
    for (let i=0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    console.log(newArr);
}

//test
map([1,2,3,4], function(val){
    return val * 2;
}); // [2,4,6,8]

/* Ex. 3
Write a function called reject which accepts two parameters an array and a callback.
The function should return a new array with all of the values that do not return 
true to the callback.
*/

function reject(arr, fn){
    let newArray = [];
    for (let i=0; i<arr.length; i++){
        if (!fn(arr[i])){
            newArray.push(arr[i]);
        }
    }
    console.log(newArray);
}

//test 1
reject([1,2,3,4], function(val){
    return val > 2;
}); // 1,2

//test 2
reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // 3, 5
