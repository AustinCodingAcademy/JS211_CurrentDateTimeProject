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
const num2String = (num) => {
  return String(num);
}

// Write a JavaScript program to convert a string to the number.
 
const string2Num = (str) => {
  return parseInt(str);
}




// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  const showDataType = (input) => {
    return typeof input
  }
  
  showDataType(false)


  // * Null
  const showDataType = (input) => {
    return typeof input
  }
  
  showDataType()


  // * Undefined
  const showDataType = (input) => {
    return typeof input;
  }
  showDataType()

  // * Number
  const showDataType = (input) => {
    return typeof input
  }
  
  showDataType(5)

  // * NaN
  const showDataType = (input) => {
    return typeof input
  }
  
  showDataType(text)

  // * String
  const showDataType = (input) => {
    return typeof input
  }
  
  showDataType("Hello Charlie")
  
  //Write a function that takes a variable that is a datatype 
  //return the type of that variable - using that 'typeof' operator

  
// Write a JavaScript program that adds 2 numbers together.

const add = (num1, num2) => {
  return num1 + num2
}

// Write a JavaScript program that runs only when 2 things are true.

const ifBothAreTrue = (thing1, thing2) => {
  if( thing1 && thing2 > 0) {
    return true
  } else {
    return false
  }
}
console.log(ifBothAreTrue(0, 3))


// Write a JavaScript program that runs when 1 of 2 things are true.
const ifOneIsTrue = (thing1, thing2) => {
  if( thing1 || thing2 > 0) {
    return true
  } else {
    return false
  }
}
console.log(ifOneIsTrue(0, 3))


// Write a JavaScript program that runs when both things are not true.  
const ifBothFalse = (thing1, thing2) => {
  if (thing1 <= 0 && thing2 <= 0) {
    return true
  } else {
    return false
  }
}
console.log(ifBothFalse(-1, -1))

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
