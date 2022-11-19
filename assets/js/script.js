var questions = [
    {
        question: "Which is not a rainbow color?",
        options: [
            "red",
            "black",
            "orange",
            "yellow"
        ],
        answer: "black"
    },
    {
        question: "What season do we have in January",
        options: [
            "summer",
            "winter",
            "spring",
            "fall"
        ],
        answer: "winter"

    },
    {
        question: "What does USA mean?",
        options: [
            "Unity Speaks Again",
            "Umbrella State in America",
            "United States of America",
            "Undue Sayings of America"
        ],
        answer: "United States of America"

    },
   
    {
        question: "Which is not a province in Canada?",
        options: [
            "New Brunswick",
            "Manitoba",
            "Ohio",
            "Saskatchewan"
        ],
        answer: "Ohio"

    },
    {
        question: "Which animal is the fastest?",
        options: [
            "cheetah",
            "lion",
            "giraffe",
            "horse"
        ],
        answer: "cheetah"

    }
]
//var time = document.querySelector(".time");
var timer = document.querySelector(".timer");
var startButton = document.querySelector("#btn");
var startBox = document.querySelector(".start-box");
var quizBox = document.querySelector(".quiz-box");
var timeLeft = 60;
var loss = 10;
var createUl = document.createElement("ul");
var counter = 0;

startButton.addEventListener("click", function(){
    counter = setInterval(function(){
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
        if (timeLeft<=0){
            clearInterval(counter);
            gameOver();
            timer.textContent = "Time up!";
            
        }
    }, 1000);
})
function gameOver(){
    quizBox.innerHTML = "";
    timer.innerHTML = "";
    var gameoverDisplay = document.createElement("h1");
    gameoverDisplay.setAttribute("id", "gameover");
    gameoverDisplay.textContent = "Game Over!";
    quizBox.appendChild(gameoverDisplay);
}