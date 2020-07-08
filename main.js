// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)
const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
} 

// Write a JavaScript program to convert a number to a string.
let string = '45';
let numS = parseInt(string);
console.log(numS)
console.log(string)


// Write a JavaScript program to convert a string to the number.
let numS2 = 15;
let string2 = numS2.toString();
console.log(string2)
console.log(numS2)



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  function isDataType(arg) {
    return typeof arg;
  }
  console.log(isDataType(4))
// replace "4" with different data type to change

  
// Write a JavaScript program that adds 2 numbers together.
const numAdd = (a, b) => {
  let sum = a + b ;
  return sum
  }
  console.log(numAdd(2, 3))
  
// document.getElementById("button-two").innerHTML = sum;

// Write a JavaScript program that runs only when 2 things are true.

const c = 3;
const d = -2;

const onTrue = (c, d) => {
if (c > 0 && d < 0) {
  return true
} else return false
}
console.log(onTrue(0, 5))

// Write a JavaScript program that runs when 1 of 2 things are true.
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
//expected output: true


// Write a JavaScript program that runs when both things are not true.  
const c = 3;
const d = -2;

const onTrue = (c, d) => {
if (c > 0 || d < 0) {
  return true
} else return false
}
console.log(onTrue(3, 5))

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
