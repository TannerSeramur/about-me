'use strict';

// Quiz
var score = 0;

alert("Welcome to my page! Here is a quick quiz to see how much you know about me");

var answer = prompt("Is my name Tanner?");
console.log(answer.toLowerCase());

if((answer.toLowerCase() === "yes") || (answer.toLowerCase() === "y") ){
    alert("Correct!");
    score = score +1; 
}else{
    alert("Incorrect :(");
}

var answer = prompt("Is my hair red?");
console.log(answer.toLowerCase());

if((answer.toLowerCase() === "yes") || (answer.toLowerCase() === "y") ){
    alert("Correct!");
    score = score +1;
}else if((answer.toLowerCase() === "no") || (answer.toLowerCase() === "n")){
    alert("Incorrect :(");
}else{
    alert("Incorrect :(");
}

var answer = prompt("Do I have more then 1 dog?");
console.log(answer.toLowerCase());

if((answer.toLowerCase() === "no") || (answer.toLowerCase() === "n") ){
    alert("Correct!");
    score = score +1;
}else if((answer.toLowerCase() === "yes") || (answer.toLowerCase() === "y")){
    alert("Incorrect :(");
}else{
    alert("Incorrect :(");
}

var answer = prompt("Am I a student at codefellows?");
console.log(answer.toLowerCase());

if((answer.toLowerCase() === "yes") || (answer.toLowerCase() === "y") ){
    alert("Correct!");
    score = score +1;
}else if((answer.toLowerCase() === "no") || (answer.toLowerCase() === "n")){
    alert("Incorrect :(");
}else{
    alert("Incorrect :(");
}

var answer = prompt("Do I live in portland?");
console.log(answer.toLowerCase());

if((answer.toLowerCase() === "no") || (answer.toLowerCase() === "n") ){
    alert("Correct!");
    score = score +1;
}else if((answer.toLowerCase() === "yes") || (answer.toLowerCase() === "y")){
    alert("Incorrect :(");
}else{
    alert("Incorrect :(");
}

// lab 3 work starts here
// for loop that gives users 4 guesses

function favNumber() {
    for(var i = 0; i <= 4; i++){
        var numGuess = prompt("Guess my favorite number?")
      
        if(numGuess < 10){
          alert("Too low! Guess higher!");
        }else if(numGuess > 10){
          alert("Too high! Guess lower!");
        }else if(numGuess = 10){
          alert("Nice! You got it!");
          score = score +1;
          break;
        }else{
          alert("wrong");
        }
      }
}
favNumber();

 function cityNames() {
    alert("During my life I have only lived in 2 states can you guess them");
    var guessArray = [];
    
    for(var i = 0;i <= 6; i++ ){
      var stateArray1 = ['washington','montana'];
      var stateArray2 = ['montana','washington'];
    
      
      var stateGuess = prompt("Guess a state:");
    
      switch(stateGuess.toLowerCase()){
        case 'washington':
          guessArray.push('washington');
          alert("Correct! Washington is one of them!");
          break;
    
        case 'montana':
          guessArray.push('montana');
          alert("Correct! Montana is one of them!");
          break;
    
        default:
        alert("Nice try but that is not one. I have lived in too states, here is a list of options to guess");
        alert("Washington, Oregon, California, Idaho, Montana, Arizona");
        break;
      }
    
      if((guessArray.toString() === stateArray1.toString()) || (guessArray.toString() === stateArray2.toString())){
        alert("You got them both!")
        score = score +1; 
        break;
      }else{
    
      }
      
    }
 }
 cityNames();

alert("You have scored "+ score + " out of 7");


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




