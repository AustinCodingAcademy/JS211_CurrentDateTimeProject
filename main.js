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
const convertNumToString = (numInput) => {
  numInput = document.getElementById("numInput").value
  document.getElementById("results2").innerHTML = `${numInput} is a ${typeof(numInput)}`;
}


// Write a JavaScript program to convert a string to the number.
let stringInput = ""

// const storeString = (string) => {
//   let stringInput = string
//   convertNumToString(numInput)
// }

const convertStringToNum = (numA) => {
  numA = document.getElementById("stringInput").value
  x = parseInt(numA)
  document.getElementById("results").innerHTML = `${x} is a ${typeof(x)}`;
  console.log(typeof(x))
}

 

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  // const isDataType = (arg) => {
  //   return typeof arg;
  // }
  // console.log(isDataType(4))
// replace "4" with different data type to change

const showDataType = (inputStuff) => {
  inputStuff = document.getElementById("input-stuff").value
  document.getElementById("type-of-input").innerHTML = typeof inputStuff;
}

  
// Write a JavaScript program that adds 2 numbers together.
const numAdd = (a, b) => {
  a = document.getElementById("value1").value
  b = document.getElementById("value2").value
  let sum = parseInt(a) + parseInt(b) ;
  document.getElementById("add-numbers").innerHTML = sum ;
  }

  console.log(numAdd(2, 3))
  
// document.getElementById("button-two").innerHTML = sum;

// Write a JavaScript program that runs only when 2 things are true.

const ifBothAreTrue = (thing1, thing2) => {
  if( thing1 && thing2 ) {
    return true
  } else {
    return false
  }
}
console.log(ifBothAreTrue(0, 5))

// Write a JavaScript program that runs when 1 of 2 things are true.
const ifEitherAreTrue = (thing1, thing2) => {
  if( thing1 || thing2 ) {
    return true
  } else {
    return false
  }
}
console.log(ifEitherAreTrue(5, 7))

//expected output: true

// Write a JavaScript program that runs when both things are not true.  
const ifNeitherAreTrue = (thing1, thing2) => {
  if( !thing1 && !thing2 ) {
    return true
  } else {
    return false
  }
}
console.log(ifNeitherAreTrue(3, 5))

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