'use strict';

// Quiz

alert("Welcome to my page! Here is a quick quiz to see how much you know about me");

var answer = prompt("Whats my name?");
console.log(answer.toLowerCase());

if(answer.toLowerCase() === "tanner" ){
    alert("Correct!");
}else{
    alert("Incorrect :(");
}

var answer = prompt("Is my hair red?");
console.log(answer.toLowerCase());

if((answer.toLowerCase() === "yes") || (answer.toLowerCase() === "y") ){
    alert("Correct!");
}else if((answer.toLowerCase() === "no") || (answer.toLowerCase() === "n")){
    alert("Incorrect :(");
}else{
    alert("Incorrect :(");
}

var answer = prompt("Do I have more then 1 dog?");
console.log(answer.toLowerCase());

if((answer.toLowerCase() === "no") || (answer.toLowerCase() === "n") ){
    alert("Correct!");
}else if((answer.toLowerCase() === "yes") || (answer.toLowerCase() === "y")){
    alert("Incorrect :(");
}else{
    alert("Incorrect :(");
}

var answer = prompt("Am I a student at codefellows?");
console.log(answer.toLowerCase());

if((answer.toLowerCase() === "yes") || (answer.toLowerCase() === "y") ){
    alert("Correct!");
}else if((answer.toLowerCase() === "no") || (answer.toLowerCase() === "n")){
    alert("Incorrect :(");
}else{
    alert("Incorrect :(");
}

var answer = prompt("Do I live in portland?");
console.log(answer.toLowerCase());

if((answer.toLowerCase() === "no") || (answer.toLowerCase() === "n") ){
    alert("Correct!");
}else if((answer.toLowerCase() === "yes") || (answer.toLowerCase() === "y")){
    alert("Incorrect :(");
}else{
    alert("Incorrect :(");
}


// POP-UP STARTS HERE
console.log('getting here');
        var login = document.getElementById("popup")
      
      
        var myFunc = function(type){
            console.log('open');
            login.classList.add("isvisable");
        }
        
      
      
        var closePop = function(){
           if(event.currentTarget === event.target){
             
             login.classList.remove("isvisable")
           }
      
        }




