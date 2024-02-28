/**
Write a program to print the sum of the elements of an array following the
given below condition.
If the array has 6 and 7 in succeeding orders, ignore the numbers
 */
function sumArray(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === 6 && arr[i + 1] === 7) {
      i += 2; // Skip 6 and 7
    } else {
      sum += arr[i];
      i++;
    }
  }
  return sum;
}

const arr = [1, 2, 3, 6, 7, 4, 5];
const result = sumArray(arr);
console.log(result); // Output: 15
