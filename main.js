// Currying function with Example:

// Currying is a technique in functional programming 
// where a function is transformed into a sequence of functions, 
// each taking a single argument. This allows for partial application of functions, 
// creating more specialized functions.

// Example in JavaScript:
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return () => console.log(a + b + c);
    };
  };
}

curryAdd(2)(3)(5)();

// ********************************************************************************************

// Palindrome with Example

// A phrase is a palindrome if it reads the same 
// forward and backward after converting all uppercase letters into
// lowercase and removing all non-alphanumeric characters. 
// For example, the string "level" is a palindrome because it remains the same 
// when you read it from the beginning to the end and vice versa. 

function isPalindrome(str) {
  // characters and convert to lowercase
  str = str
    .toString()
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase();

  // Check if the string is the same forwards and backwards
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(isPalindrome(1001)); // true
console.log(isPalindrome("hello")); // false

// ********************************************************************************************

// Reverse Vowels in JavaScript

function reverseVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let left = 0;
  let right = str.length - 1;
  const arr = str.split('');

  while (left < right) {
    if (!vowels.includes(arr[left])) {
      left++;
      continue;
    }

    if (!vowels.includes(arr[right])) {
      right--;
      continue;
    }

    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr.join('');
}

console.log(reverseVowels("hello")) // holle

// ********************************************************************************************

// Star pattern

//   *
//   **
//   ***
//   ****

const makeStarPattern = () => {
  let str = "";
  for (let index = 0; index <= 4; index++) {
    // str += '*'.repeat(index) (inbuilt repeat function use)
    for (let j = 0; j <= index; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
};

makeStarPattern()

// ********************************************************************************************

