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
