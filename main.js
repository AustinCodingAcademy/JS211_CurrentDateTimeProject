// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.

document.getElementById("button1").addEventListener("click", function () {
  const num1 = document.getElementById("numInput1")?.value;
  console.log(num1, typeof num1);
  /*
  Here's how the function would look outside of an event listener:
  const numToStr = (num) => `${num}`;
  console.log(numToStr(14), typeof numToStr(14));

  but since we're grabbing the value from the DOM, it's already 
  a string, even  in the case of a number type input.
  */
  document.getElementById("output1").innerHTML = ` ${num1}`;
});

// Write a JavaScript program to convert a string to the number.

/*
w/o event listener:
const strToNum = (str) => Number(str);
console.log(strToNum("14"), typeof strToNum("14"));
*/

document.getElementById("button2").addEventListener("click", function () {
  let num1 = document.getElementById("numInput2")?.value;
  num1 = Number(num1);
  console.log(num1, typeof num1);

  document.getElementById("output2").innerHTML = ` ${num1}`;
});

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

/*
w/o event listener
const typeCheck = (input) => typeof input;
console.log(typeCheck(true));
*/

const typeCheck = () => {
  const checkType = document.getElementById("typeOfInput").value;
  console.log(typeof checkType);
  document.getElementById("output3").innerHTML = ` ${typeof checkType}`;
};

document.getElementById("button3").addEventListener("click", typeCheck);

// Write a JavaScript program that adds 2 numbers together.
document.getElementById("button4").addEventListener("click", function () {
  const add1 = document.getElementById("addition1").value;
  const add2 = document.getElementById("addition2").value;
  document.getElementById("output4").innerHTML = Number(add1) + Number(add2);
});

// Write a JavaScript program that runs only when 2 things are true.
/*
without event listener:
const bothTrue = (a, b) => {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
};
*/

const form1 = document.querySelector("#myForm1");
const log1 = document.querySelector("#log1");

form1.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    const data = new FormData(form1);
    console.log(data);
    const values = [...data.values()];
    console.log(values);
    /*
      ['1', '1']
    */
    const val1 = Number(values[0]);
    const val2 = Number(values[1]);
    if (val1 && val2) {
      log1.innerText = "both are true";
    } else {
      log1.innerText = "";
    }
  },
  false
);

// Write a JavaScript program that runs when 1 of 2 things are true.

/*
without event listener
const eitherTrue = (a, b) => {
  if (a === true || b === true) {
    return true;
  } else if (a === true && b === true) {
    console.log(
      `this is an ambiguous case. The directions say 'when 1 of 2 things are true', not explicitly covering when BOTH are true.`
    );
    return true;
  } else {
    return false;
  }
};
*/
const form3 = document.querySelector("#myForm3");
const log3 = document.querySelector("#log3");

form3.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    const data = new FormData(form3);
    console.log(data);
    const values = [...data.values()];
    console.log(values);
    /*
      ['1', '1']
    */
    const val1 = Number(values[0]);
    const val2 = Number(values[1]);
    if (val1 || val2) {
      log3.innerText = "At least 1 of these is true";
    } else {
      log3.innerText = "";
    }
  },
  false
);

// Write a JavaScript program that runs when both things are not true.

/*
without event listener:
const neitherTrue = (a, b) => {
  if (!a && !b) {
    return `this is the condition you're looking for.`;
  } else return false;
};
*/

const form2 = document.querySelector("#myForm2");
const log2 = document.querySelector("#log2");

form2.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    const data = new FormData(form2);
    console.log(data);
    const values = [...data.values()];
    console.log(values);
    /*
      ['1', '1']
    */
    const val1 = Number(values[0]);
    const val2 = Number(values[1]);
    if (!val1 && !val2) {
      log2.innerText = "both are false";
    } else {
      log2.innerText = "";
    }
  },
  false
);

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
