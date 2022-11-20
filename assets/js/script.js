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
var questionBox = document.querySelector(".question-box");
var timeLeft = 60;
var loss = 10;
var createUl = document.createElement("ul");
var counter = 0;
var score = 0;
var questionCount = 1;
var questionNum = 0;
var question = document.querySelector(".question");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var checkAnswer = document.querySelector(".checkAnswer");
var allOptionButtons = document.querySelectorAll(".option");
var done = document.querySelector("#done");
var completed = document.querySelector(".completed-box")


function timerCountdown(){
    counter = setInterval(function(){
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
        if (timeLeft<=0){
            clearInterval(counter);
            gameOver();
            timer.textContent = "Time up!";
            done.textContent = "All Done!";

            
        }else if(questionCount>=questions.length+1){
            gameOver();
clearInterval(counter);
timer.textContent = "Time up!";
        }
       
    }, 1000);
    // displayQuestions(questionNum);
}

function startQuiz(){
    quizBox.innerHTML = "";
    questionBox.style.display = "block";
    // questionNum = 0;
    timerCountdown();
    displayQuestions(questionNum);
}
startButton.addEventListener("click", startQuiz);

function displayQuestions(x){
question.textContent = questions[x].question;
option1.textContent = questions[x].options[0];
option2.textContent = questions[x].options[1];
option3.textContent = questions[x].options[2];
option4.textContent = questions[x].options[3];
questionNum = x;
   
    console.log("Test");

}

function confirmAnswer(event){

checkAnswer.style.display = "block";
setTimeout(function(){
    checkAnswer.style.display = "none";
}, 1000);
// console.log(event.target.textContent);
if(questions[questionNum].answer == event.target.textContent){
    event.preventDefault();
    console.log("Correct");
    checkAnswer.textContent = "Correct!";
    score += 1;
}else{
    timeLeft -= 10;
    checkAnswer.textContent = "Wrong! The correct answer is " + questions[questionNum].answer + " .";
}
// setTimeout(function(){
//     checkAnswer.style.display = "none";
// }, 1000);


if (questionNum < questions.length - 1){
    questionNum++;
    displayQuestions(questionNum);
}else {

gameOver();
}
//  else{
//     displayQuestions(questionNum);
// }
questionCount++;

}

for (var i=0; i<allOptionButtons.length; i++){
    allOptionButtons[i].addEventListener("click",confirmAnswer);
}

function gameOver(){
    questionBox.style.display = "none";
    completed.style.display = "block";

//     timer.innerHTML = "";
//     var gameoverDisplay = document.createElement("h1");
//     gameoverDisplay.setAttribute("id", "gameover");
//     gameoverDisplay.textContent = "Game Over!";
//     quizBox.appendChild(gameoverDisplay);
}