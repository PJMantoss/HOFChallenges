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

//test 2
each([1,2,3,4], function(val){
    console.log(val*2);
});


/* Ex. 2
Write a function called map which accepts two parameters: an array and a callback.
The map function should return a new array with the result of each value being 
passed to the callback function. Here's an example:
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
});
