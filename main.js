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

console.log(new Person("Hello", 27).staticAge); // undefined
console.log(new Person("Hello", 27).prototypeAge); // 40

// ********************************************************************************************

// Differences between for...of and for...in statements

// Both for...in and for...of statements iterate over js data structures.
// The only difference is over what they iterate:
// for..in iterates over all enumerable property keys of an object
// for..of iterates over the values of an iterable object.

const arr = ["a", "b", "c"];

arr.newProp = "newValue";

// key are the property keys (Object is iterable)
for (let key in arr) {
  console.log(key); // output - 0, 1, 2, newProp (keys)
}

// value are the property values (Object is not iterable)
for (let value of arr) {
  console.log(value); // output - a, b, b (values)
}

// ********************************************************************************************

// Generator function

// A generator function in JavaScript is a special type of function that can pause its execution
// and yield multiple values one at a time. It's defined using the function* syntax and contains one or more yield expressions.

// Different kinds of generators -
// Generator function declaration:

function* generatorFunction(value) {
  yield value;
  yield value + 10;
  yield value + 20;
}

// Create a generator object
const generator = generatorFunction(10);

// Call the generator to get values one at a time
console.log(generator.next().value); // Output: 10
console.log(generator.next().value); // Output: 20
console.log(generator.next().value); // Output: 30

// Generator function expressions:
const myGenFunc = function* () {
  yield 1;
  yield 2;
  yield 3;
};
const genObj1 = myGenFunc();

// Generator method definitions in object literals:
const myObj = {
  *myGeneratorMethod() {
    yield 1;
    yield 2;
    yield 3;
  },
};
const genObj2 = myObj.myGeneratorMethod();

// Generator method definitions in class:
class MyClass {
  *myGeneratorMethod() {
    yield 1;
    yield 2;
    yield 3;
  }
}
const myObject = new MyClass();
const genObj3 = myObject.myGeneratorMethod();

// Generator as a computed property:
const SomeObj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
console.log(Array.from(SomeObj)); // [ 1, 2, 3 ]
