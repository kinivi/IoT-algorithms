'use strict'


//defining merge sort

//START
// -------------------------------------

function mergeSort (arr) {
    if (arr.length === 1) {
      // return one data array
      return arr
    }
  
    const middle = Math.floor(arr.length / 2) // get the middle item of the array
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
  
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }
  
  // compare the arrays
  function merge (left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
  
    
    while (indexLeft < left.length && indexRight < right.length) {
      a++;
      if (left[indexLeft].power <= right[indexRight].power) {
        b++;
        result.push(left[indexLeft])
        indexLeft++
      } else {
        b++;
        result.push(right[indexRight])
        indexRight++
      }
    }
  
    b++;
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  
    
  }

//END
// ---------------------------


let arr = [50, 20, 30, 17, 100];
let percent = 100;

let sortedArr = arr.sort((a, b) => b - a);
let count = sortedArr.length < 3 ? 0 : 3;
let sum = 0;

let leftIndex = 0;
let rightIndex = sortedArr.length - 1;

while (leftIndex !== rightIndex) {
     if (count === 3) {
         sum += sortedArr[leftIndex] * (1 - percent/100);
         leftIndex++;
         count = 0;
     } else {
        sum += sortedArr[rightIndex];
        rightIndex--;
        count++;
     }
}

sum += sortedArr[leftIndex];


// for (let i = 0; i < sortedArr.length; i++) {
//     if(i < count) {
//         sum += sortedArr[i] * (1 - percent/100);
//     } else {

//         sum += sortedArr[i];
//     }
//     console.log("sum= " + sum + " Element:" + sortedArr[i]);


// }
console.log(sum);