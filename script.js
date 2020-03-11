// Create an array of objects (questions/answers)
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["Strings","Booleans","Alerts","Numbers"],
        answer: "Alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within ______",
        options: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        answer: "Parenthesis",
    }, 
    {
        question: "Arrays in JavaScript can be used to store _____",
        options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer: "All of the Above",
    },
    {
        question: "Strings in values must be enclosed with _____ when assigned to variables:",
        options: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        answer: "Quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printed content to the debugger is:",
        options: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
        answer: "console.log",
    }
    
]


// Tie the quiz to the button
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

// timeEl.addEventListener("click", function() {

// set the initial timer
    var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "time left: " + secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  }
  function sendMessage() {
    timeEl.textContent = " ";
  
    mainEl.appendChild(imgEl);
  
  }
  
  setTime();

// if/else statements for answers
// game ends and records for score on local storage

// });
