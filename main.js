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
const convertNumToString = (num) => {
  return num.toString();
}

const numberToStringBtn = document.getElementById('numberToStringBtn');

numberToStringBtn.addEventListener('click', () => {
  const inputValue = document.getElementById('numberToStringInput').value;
  let result = convertNumToString(inputValue);
  document.getElementById('displayNumberToString').innerHTML = result;
});


// Write a JavaScript program to convert a string to the number.
const convertStringToNum = (string) => {
  return parseInt(string);
}

const stringToNumberBtn = document.getElementById('stringToNumberBtn');

stringToNumberBtn.addEventListener('click', () => {
  const inputValue = document.getElementById('stringToNumInput').value;
  let result = convertStringToNum(inputValue);
  document.getElementById('displayStringToNumber').innerHTML = result;
});


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

const showDataType = (data) => {
  return typeof data;
}

const showDataTypeBtn = document.getElementById('showDataTypeBtn');

showDataTypeBtn.addEventListener('click', () => {
  const inputValue = document.getElementById('showDataTypeInput').value;
  const result = showDataType(inputValue);
  document.getElementById('displayDataType').innerHTML = result;
});
  

  
// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = (num1, num2) => {
  return num1 + num2;
}

const addTwoNumbersBtn = document.getElementById('addTwoNumbersBtn');

addTwoNumbersBtn.addEventListener('click', () => { 
  let num1 = parseInt(document.getElementById('addTwoNumbersInputOne').value);
  let num2 = parseInt(document.getElementById('addTwoNumbersInputTwo').value);
  const result = addTwoNumbers(num1, num2);
  document.getElementById('displayAddTwoNumbers').innerHTML = result;
});


// Write a JavaScript program that runs only when 2 things are true.
const bothAreTrue = (test1, test2) => {
  return test1 && test2;
}

console.log(bothAreTrue(true, true));


// Write a JavaScript program that runs when 1 of 2 things are true.
const oneIsTrue = (test1, test2) => {
  return (test1 && !test2) || (!test1 && test2);
}

console.log(oneIsTrue(true, false));


// Write a JavaScript program that runs when both things are not true.  
const bothAreFalse = (test1, test2) => {
  return !test1 && !test2;
}

console.log(bothAreFalse(false, false));

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
