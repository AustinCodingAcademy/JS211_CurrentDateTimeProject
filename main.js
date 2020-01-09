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
 

// Below is a JavaScript program to convert a number to a string.

const b = 10;
console.log(typeof b);

b.toString(b);
console.log(typeof b);


// Below is a JavaScript program that came with the Git.

const num = () => {
  const num = 11

  document.getElementById("display-number1").innerHTML = num;
  document.getElementById("display-number1").toString(num);
}

// Write a JavaScript program to convert a string to the number.

const a = '10';
console.log(typeof a);

a.toNumber(a);
console.log(typeof a);


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.


const num1 = 10
const num2 = 15

const addSum = (x, y) => {
    console.log(x + y)
  
    // let addSum = document.getElementById("display-number2").innerHTML = addSum;
  }
addSum(num1, num2);


// Write a JavaScript program that runs only when 2 things are true.

const firstNumber = 42;
const secondNumber = 31;
 console.log(typeof firstNumber);
 console.log(typeof secondNumber);
 
 const addBoth=(x, y)=>{
   if (x < y && y > 0) {
     return (y - x)
   }
 else {
      return 'this will be negative'
 }
 }
 addBoth(firstNumber, secondNumber)


// Write a JavaScript program that runs when 1 of 2 things are true.

const thirdNumber = 25;
const fourthNumber = 16;
 console.log(typeof thirdNumber);
 console.log(typeof fourthNumber);
 
 const subtractBoth=(x, y)=>{
   if (x < y || y > 10) {
     return (y - x)
   }
 else {
      return 'this will be negative'
 }
 }
 subtractBoth(thirdNumber, fourthNumber)


// Write a JavaScript program that runs when both things are not true. 

const nameOne = 'Taylor';
const nameTwo = 'Tipton';
 console.log(typeof nameOne);
 console.log(typeof nameTwo);
 
 const fullName=(x, y)=>{
   if (typeof x === Number && typeof y === Number) {
     return 'My name is not a number'
   }
 else {
      return 'My name is Taylor Tipton'
 }
 }
 fullName(nameOne, nameTwo)



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
