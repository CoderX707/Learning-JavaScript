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
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let left = 0;
  let right = str.length - 1;
  const arr = str.split("");

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
  return arr.join("");
}

console.log(reverseVowels("hello")); // holle

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

// makeStarPattern()

// ********************************************************************************************

// Immediately Invoked Function Expressions(IIFE)

// An IIFE is a function that is called immediately after it is defined.
// It's a way to encapsulate code within a function and execute it right away.

(function (date) {
  console.log("function called", date.getFullYear());
})(new Date());

// IIFE without any extra brackets

void (function (date) {
  console.log("IIFE without any extra brackets", date.getFullYear());
})(new Date());

// ********************************************************************************************

// Difference between isNaN and Number.isNaN

// isNaN: The global function isNaN converts the argument to a Number and returns true if
// the resulting value is NaN.

console.log(isNaN("Hello")); // true
console.log(isNaN("10")); // false

// Number.isNaN: This method does not convert the argument. But it returns true when the
// type is a Number and value is NaN.

console.log(Number.isNaN("Hello")); // false
console.log(Number.isNaN(NaN)); // true

// ********************************************************************************************

// Define instance and non-instance properties

// The Instance properties must be defined inside of class methods. For example, name and age
// properties defined insider constructor as below,

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// But Static(class) and prototype data properties must be defined outside of the ClassBody
// declaration. Let's assign the age value for Person class as below,

Person.staticAge = 35;
Person.prototype.prototypeAge = 40;

console.log(new Person('Hello',27).staticAge); // undefined 
console.log(new Person('Hello',27).prototypeAge); // 40

// ********************************************************************************************

