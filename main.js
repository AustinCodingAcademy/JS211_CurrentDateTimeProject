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

var i = 0;

const convertNumberToString = () => {
   i+=10;
  document.getElementById("number-converter").innerHTML = i.toString();
}



// Write a JavaScript program to convert a string to the number.

const convertStringToNumber = () => {
  const mystring = document.getElementById("number-input").value;
  document.getElementById("string-converter").innerHTML = parseInt(mystring, 10);
}



// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

var lightsOn = true;
  
const showDataTypes = () => {
  if (lightsOn) { document.body.style.background = "black";
  document.body.style.color = "white";
  document.getElementById("darkmode-button").innerText = "Light Mode";
    lightsOn = false;
  }else if (!lightsOn) { document.body.style.background = "white";
  document.body.style.color = "black";
  document.getElementById("darkmode-button").innerText = "Dark Mode";
    lightsOn = true;
  }
  
}


let potato = null;
potato;
console.log(potato);
// document.getElementById("nulldiv").innerHTML = "Here's a null variable" + getType(potato) + "<br/>";

let rutebaga;
rutebaga;
console.log(rutebaga);
// document.getElementById("nulldiv").innerHTML = rutebaga;



const outputNumber = () => {
  const x = 100;
document.getElementById("number-output").innerHTML = x;
}

const convertStringToNumber2 = () => {
  const mystring = 50;
  document.getElementById("notanumber").innerHTML = parseInt(mystring, 2);
}

const stringOutput = () => {
  const aString = "Hello World!";
  document.getElementById("string").innerHTML = aString;
}


  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = () => {
  const num1 = document.getElementById("number1").value
  const num2 = document.getElementById("number2").value
  var num = +num1 + +num2;

  document.getElementById("addnumbers").innerHTML = num;
}
  


// Write a JavaScript program that runs only when 2 things are true.

var x = 15;
var y = 40;

  document.getElementById("twotrue").innerHTML = (x < 18 && y < 60);



// Write a JavaScript program that runs when 1 of 2 things are true.

var x = 20;
var y = 40;

document.getElementById("onetrue").innerHTML = (x < 30 || y < 35);


// Write a JavaScript program that runs when both things are not true. 

var x = 6;
var y = 3;

document.getElementById("nottrue").innerHTML = 
(x === y) && (x < y);





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
