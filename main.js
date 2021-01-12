function dayAndTime(){
  
  const today = new Date();

  document.getElementById("display-element").innerHTML = today;

  console.log(new Date);
  
} 



function numToString(){ 

  const x = document.getElementById("quantity").value; 

  document.getElementById("display-string").innerHTML = '"' + x + '"'

  console.log(x); 
  
}


function stringToNum(){

  const x = document.getElementById("stringNum").value; 

  document.getElementById("display-num").innerHTML = x;   

  console.log(x); 
}


function multipleDatatype(item){

  if(typeof item === 'boolean'){
    return 'boolean'; 
  }else if(item === null){
    return 'null'; 
  }else if(item === undefined){
    return 'undefined'; 
  }else if(typeof item === 'number'){
    return 'number';
  }else if(typeof item === 'string'){
    return 'string';
  }else if(isNaN(item)){
    return 'NaN'; 
  }
}

let result = multipleDatatype(6);
console.log('the datatype is:',result); 

function addition(){

  let x = document.getElementById("number1").value;  

  let y = document.getElementById("number2").value; 

  let sum = (Number(x) + Number(y)); 

  document.getElementById("display-sum").innerHTML = sum; 

  console.log(Number(x) + Number(y)); 
}


function booleanTestOne(){

  let button1 = document.getElementById("true");
  let button2 = document.getElementById("true2"); 
  let outputBox = "";

  if(button1.checked && button2.checked){
    outputBox = "Correct";
  }else{
    outputBox = "Incorrect";
  }

  document.getElementById("output-display").value = outputBox; 

  console.log(outputBox);
}




function booleanTestTwo(bool1, bool2){

  if(bool1 || bool2){
    return 'test passed';
  }else{
    return 'test failed';
  }
}

let y = booleanTestTwo(false,false);
console.log(y);


function booleanTestThree(bool1, bool2){

  if(!bool1 && !bool2){
    return 'test passed';
  }else{
    return 'test failed';
  }
}

let z = booleanTestThree(false,false);
console.log(z);


