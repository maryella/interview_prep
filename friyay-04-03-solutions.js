//1. Fizz Buzz
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

//2. Multiply without *
// note: this is a simple solution that only works for numbers >= 0
function multiply(a, b) {
  let i = 0;
  let sum = 0;
  while (i < a) {
    sum += b;
    i++;
  }
  return sum;
}

//3. Reverse a string
//version 1 without built in string/array methods
function reverse1(string) {
  let new_string = "";
  for (let i = string.length - 1; i >= 0; i--) {
    new_string += string[i];
  }
  return new_string;
}
//version 2 using built in string/array methods
function reverse2(string) {
  let string_array = string.split("");
  let reversed_string_array = string_array.reverse();
  let new_string = reversed_string_array.join("");
  return new_string;
}

//4a. SumZero
const testarr1 = [-11, -8, -3, 1, 2, 5, 8, 23];
function sumZero1(arr) {
  let i = 0;
  let j = arr.length - 1;
  let sum_arr = [];
  while (i < arr.length / 2) {
    if (arr[i] + arr[j] == 0) {
      console.log("match");
      sum_arr.push(arr[i], arr[j]);
      return sum_arr;
    } else {
      i += 1;
      j -= 1;
    }
  }
}
//4b Sumzero unsorted array. Do not sort. No nested loops
const testarr2 = [-2, -3, 1, 8, 14, -6, 7, 3];
function sumZero(arr) {}

//5 Islands of Ones
function islandsof1(arr) {
  let total = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == 1 && arr[i + 1] != 1) {
      total += 1;
    }
    i++;
  }
  return total;
}

//6 Palindrome
function palidromeCheck(string) {
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (string[i] != string[j]) {
      return false;
    } else {
      return true;
    }
  }
  i++;
  j--;
}
