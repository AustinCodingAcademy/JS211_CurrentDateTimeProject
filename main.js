// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
  document.getElementById("display-type").innerHTML = null
}
 

// Write a JavaScript program to convert a number to a string.

const storeNumber = (a) => {
 let inputString = a
 changeNum(inputString)
 console.log(inputString)
}


const changeNum = (a) => {
  let string = a.toString()
  document.getElementById("display-element").innerHTML = string;
  document.getElementById("display-type").innerHTML = typeof string;
  console.log(string)
  console.log(typeof string)
}



// Write a JavaScript program to convert a string to the number.


const storeString = (string) => {
  let inputNum = string
  changeString(inputNum)
  console.log(inputNum)
}

const changeString = (a) => {
  let string = a;
  let num = parseInt(string);
  document.getElementById("display-element").innerHTML = num;
  document.getElementById("display-type").innerHTML = typeof num;
  console.log(num)
  console.log(typeof num)
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:

// const anyType = () => {

// }

const identifyType = (type) => {
  console.log(typeof type)
  document.getElementById("display-element").innerHTML = type;
  document.getElementById("display-type").innerHTML = typeof type;
} 


  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.

const addNumbers = () => {
	let val1 = parseInt(document.getElementById("value1").value);
	let val2 = parseInt(document.getElementById("value2").value);
  document.getElementById("display-element").innerHTML = val1 + val2;
  document.getElementById("display-type").innerHTML = null
  }


//  let firstNum = null
//  let secondNum = null
 
// const saveFirstNumber = (num) => {
//   firstNum = parseInt(num)  
// }

// const saveSecondNumber = (num) => {
//   secondNum = parseInt(num)
// }

// const addNum = (num1, num2) => {
//   let sum = num1 + num2
//   document.getElementById("display-element").innerHTML = sum;
//   document.getElementById("display-type").innerHTML = typeof sum;  
// }

// const addNum = () => {
//   document.getElementById("display-element").innerHTML = additionForm(firstNum + secondNum);
//   document.getElementById("display-type").innerHTML = typeof additionForm(firstNum + secondNum);

// Write a JavaScript program that runs only when 2 things are true.


const confirmTruth = () => {
  let x = parseInt(document.getElementById("valueX").value);
  let y = parseInt(document.getElementById("valueY").value);
  if(x && y){
    document.getElementById("display-element").innerHTML = "True";
  } else {
    document.getElementById("display-element").innerHTML = "False";  
  }
  
  // document.getElementById("display-element").innerHTML = ansD = val1 + val2;
  // document.getElementById("display-type").innerHTML = null
}


// Write a JavaScript program that runs when 1 of 2 things are true.



const confirmLie = () => {
  let x = parseInt(document.getElementById("valueX").value);
  let y = parseInt(document.getElementById("valueY").value);
  if(x || y){
    document.getElementById("display-element").innerHTML = "True";
  } else {
    document.getElementById("display-element").innerHTML = "False";  
  }
}


// // Write a JavaScript program that runs when both things are not true.  

const confirmFalse = () => {
  let x = parseInt(document.getElementById("valueX").value);
  let y = parseInt(document.getElementById("valueY").value);
  if(!x || !y){
    document.getElementById("display-element").innerHTML = "True";
  } else {
    document.getElementById("display-element").innerHTML = "False";  
  }
}

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
