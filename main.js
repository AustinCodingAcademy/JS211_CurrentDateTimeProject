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

let x = 27;
console.log(x.toString(), x);

// Write a JavaScript program to convert a string to the number.

let z = "55";     //the variable z hold the string 55
parseInt(z);      //the string is converted into a number

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  const myBool = true;
  // * Null
  const myNull = null;
  // * Undefined
  const myUndef = undefined;
  // * Number
  const num = 7;
  // * NaN
  const myNan = NaN;
  // * String
  const myString = "I am a string"

  const isTypeOf = (data) => {
    return console.log(typeof data);
  }
  
  // function invocation
  isTypeOf(myBool);
  isTypeOf(myNull);
  isTypeOf(myUndef);
  isTypeOf(num);
  isTypeOf(myNan);
  isTypeOf(myString);

  
// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
}

addTwoNumbers(7, 54)


// Write a JavaScript program that runs only when 2 things are true.
let a = 2;
let b = 2;
let c = 6;

const trueTwo = (a, b, c) => {
  if ((a === b) && (c > b)){
    return true;
  }
}

trueTwo();

// Write a JavaScript program that runs when 1 of 2 things are true.
a = 2;
b = 2;
c = 1;

const trueOne = (a, b, c) => {
  if ((a === b) || (c > b)){
    return true;
  }
}

trueOne();

// Write a JavaScript program that runs when both things are not true.

a = 6;
b = 5;
c = 1;

const falseTwo = (a, b, c) => {
  if (!(a === b) && !(c > b)){
    return true;
  }
}

falseTwo();

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
