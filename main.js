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
const x = 10
x.toString()
console.log(x)

// Write a JavaScript program to convert a string to the number.
let str = '7';
parseInt(str); 
console.log(str)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  const popBool = true;
  typeof popBool;

  // * Null
  const popValue = null;
  typeof popValue;
  //the computer see's null as an object because of it's 0 type tag

  // * Undefined
  let pineapple;
  console.log(pineapple);

  // * Number
  const num1 = 5
  typeof num1;

  // * NaN
  const thing = NaN
  typeof NaN;
  //the computer things NaN as a number
  

  // * String
  const firstName = "Devin";
  typeof firstName;
  
  
// Write a JavaScript program that adds 2 numbers together.
const addTwoNumbers = (num1, num2) => {
  return num1 + num2
}
addTwoNumbers(20, 64)


// Write a JavaScript program that runs only when 2 things are true.
const num1 = 10;
const num2 = 20;
if (num1 && num2) {
  console.log(true)
}



// Write a JavaScript program that runs when 1 of 2 things are true.

const myName = "Devin";
if(myName === "Devin") {
console.log(true)
} else { 
  console.log("incorrect user name")
}


// Write a JavaScript program that runs when both things are not true.  
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
