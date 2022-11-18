

var time = document.querySelector(".time");
var timer = document.querySelector(".timer");
var highscore = document.querySelector(".highscore");
var timeLeft = 60;
var btn = document.querySelector(".btn");
var questionBox = document.querySelector(".question-box");
var startBox = document.querySelector(".start-box");
var quizBox = document.querySelector(".quiz-box");
var quizQuestion = document.querySelector(".quiz-question");
var options;
var counter;
var firstQuestion;
var fourOptions;
var allOptions;
var correctAnswer;
var wrongAnswer;
// var footer = document.querySelector(".confirmation");
// var answerCorrect = document.querySelector(".correct");
// var answerWrong = document.querySelector(".wrong");

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

function setTimer() {
    counter = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(counter);
        }

    }, 1000);
}
var questionIndex = 0;
function displayQuestion(questionIndex) {
    startBox.style.display = "none";
    // classList.add("hide");

    questionBox.style.display = "block";
    questionBox.appendChild(highscore);
    questionBox.appendChild(timer);
    firstQuestion = document.createElement("div");
    firstQuestion.setAttribute("class", "quiz-question");
    questionBox.appendChild(firstQuestion);
    firstQuestion.textContent = questions[questionIndex].question;

    options = document.createElement("div");
    options.setAttribute("class", "options");
    questionBox.appendChild(options);

    for (var i = 0; i < 4; i++) {
        var firstChoice = document.createElement("button");
        firstChoice.setAttribute("class", "buttons");
        options.appendChild(firstChoice);
        firstChoice.innerHTML = questions[questionIndex].options[i];
    }
}

function confirmAnswer(questionIndex) {
    fourOptions = document.querySelector(".options");
    allOptions = fourOptions.querySelectorAll(".buttons");
    // console.log(allOptions[1]);
    for (var i = 0; i < allOptions.length; i++) {
        // console.log(allOptions[i]);
        allOptions[i].addEventListener("click", function (event) {

            if (event.target.textContent == questions[questionIndex].answer) {
                // answerCorrect.style.display = "block";
                correctAnswer = document.createElement("div");
                correctAnswer.setAttribute("class", "correct");
                questionBox.appendChild(correctAnswer);
                correctAnswer.textContent = "Correct!";
                questionBox.removeChild(firstQuestion);
                questionBox.removeChild(options);
                questionBox.removeChild(correctAnswer);
                setTimeout(function () {
                    questionBox.removeChild(firstQuestion);
                    questionBox.removeChild(options);
                    questionBox.removeChild(wrongAnswer);
                    displayQuestion(1);
                }, 1000);
            } else {
                wrongAnswer = document.createElement("div");
                wrongAnswer.setAttribute("class", "correct");
                questionBox.appendChild(wrongAnswer);
                wrongAnswer.textContent = "Wrong!";
                deductTimer();
                setTimeout(function () {
                    questionBox.removeChild(firstQuestion);
                    questionBox.removeChild(options);
                    questionBox.removeChild(wrongAnswer);
                    displayQuestion(1);
                }, 1000);
                // questionBox.removeChild(firstQuestion);
                // questionBox.removeChild(options);
                // questionBox.removeChild(wrongAnswer);
                // firstQuestion.textContent = "";
                // allOptions.innerHTML = "";



            }
            
        });

    }

    //     option.textContent = questions[questionIndex].option1;
}

// function clearQuestionbox(){
//     questionBox.removeChild(firstQuestion);
//     questionBox.removeChild(options);
// }

function deductTimer() {
    var currentTime = parseInt(time.textContent);
    currentTime = currentTime - 10;
    // console.log(currentTime--);
    var count = setInterval(function () {

        currentTime--;
        time.textContent = currentTime;
        clearInterval(counter);
        if (currentTime === 0) {
            clearInterval(count);
        }
    }, 1000);



}
function selectAnswer() {

    // console.log("Hello");
}
// var questionEl = document.createElement("div");
// questionEl.classList.add("que-text");
// startBox.appendChild(questionEl);
// var questionOne = questions[0].question;
// questionEl.textContent = questionOne;
// }

btn.addEventListener("click", () => {
    setTimer();
    displayQuestion(0);
    confirmAnswer(0);
});
