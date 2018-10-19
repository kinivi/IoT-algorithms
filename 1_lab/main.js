'use strict';

let a = 0;
let b = 0;
class Lamp {

  constructor(producer, power, producerCountry, durationOfWork) {
    this.producer = producer;
    this.power = power;
    this.producerCountry = producerCountry;
    this.durationOfWork = durationOfWork;
  }

}

let lamp1 = new Lamp("Philips", 20, "Ukraine", 2200);
let lamp2 = new Lamp("Samsung", 40, "Ukraine", 3200);
let lamp3 = new Lamp("Sinson", 35, "Ukraine", 1200);
let lamp4 = new Lamp("Sinson-2", 34, "Ukraine", 2200);
let lamp5 = new Lamp("Sinson-2S", 35, "Ukraine", 900);

let lamps = [lamp3, lamp1, lamp2, lamp4, lamp5];


function selectionSort(lamps) {
  for (let i = 0; i < lamps.length - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < lamps.length; j++) {
      a++
      if (lamps[minIndex].durationOfWork >= lamps[j].durationOfWork) {
        minIndex = j;        
      }

    }

    b++
    swap(i, minIndex, lamps);

  }
}

function swap(a, b, data) {
  //one linear swap
  data[b] = [data[a], data[a] = data[b]][0];
}

//Merge sort


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

const list = [2, 5, 1, 35, 35, 2, 3, 8, 6, 3]

selectionSort(lamps);
console.log(lamps);
console.log(a);
console.log(b);