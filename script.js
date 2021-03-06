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

var questionIndex = 0
var options = 0

// Tie the quiz to the button
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");


document.querySelector(".btn-primary").addEventListener("click", function() {
document.getElementById("startpage").style.display = "none";
document.getElementById("questionPage").style.display = "block";
document.getElementById("question").textContent = questions[questionIndex].question;

// get responsive answer buttons
document.querySelector(".answer-choice").addEventListener("click", function() {
    questionIndex++
    document.getElementById("question").textContent = questions[questionIndex].question;
    document.querySelector(".answer-choice").textContent = questions.options[0];
    if(answer-choice === answer) {
        displayMessage("Correct!")
    } else {
        secondsLeft - 10;
        displayMessage("Incorrect!");
    }
});

//store score in local storage
localStorage.setItem("highScores", JSON.stringify(initials));
var lastUser = JSON.parse(localStorage.getItem("highScores"));



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

  // Get quiz to start when button is pressed.


// if/else statements for answers

// game ends and records for score on local storage

});
