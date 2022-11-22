// list of random questions to be asked and their corresponding options
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

var timer = document.querySelector(".timer");
var startButton = document.querySelector(".btn");
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
var completed = document.querySelector(".completed-box");
var finalScore = document.querySelector("#finalscore");
var initialValue = document.querySelector("#initialValue");
var highScore = document.querySelector(".highscore-box");
var highScoreList = document.querySelector("#highscore-list");
var submitButton = document.querySelector("#submitButton");
var initialsForm = document.querySelector("#initials-form");
var scoresList = [];
var gobackBtn = document.querySelector("#go-back");
var clearHighscores = document.querySelector("#clear-highscores");
var highscoreEl;

// function to set timer and make it countdown from 60 to 0 after which game is over
function timerCountdown() {
    counter = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(counter);
            gameOver();
            timer.textContent = "Game over!";
            done.textContent = "All Done!";

            // if all questions are answered before timer reaches 0, the timer stops and game is over
        } else if (questionCount >= questions.length + 1) {
            clearInterval(counter);
            gameOver();

            timer.textContent = "Game over!";
        }

    }, 1000);

}
// function to display the div containing the question and answers, to start timer and show first set of question and answers
function startQuiz() {
    quizBox.style.display = "none";
    questionBox.style.display = "block";

    timerCountdown();
    displayQuestions(questionNum);
}
//  when the start button is clicked, the fist set of question and answers are displayed
startButton.addEventListener("click", startQuiz);

// function that displays each set of question and answers
function displayQuestions(x) {
    question.textContent = questions[x].question;
    option1.textContent = questions[x].options[0];
    option2.textContent = questions[x].options[1];
    option3.textContent = questions[x].options[2];
    option4.textContent = questions[x].options[3];
    questionNum = x;



}

// this checks if question is right or wrong and displays the status
function confirmAnswer(event) {

    checkAnswer.style.display = "block";
    setTimeout(function () {
        checkAnswer.style.display = "none";
    }, 1000);

    if (questions[questionNum].answer == event.target.textContent) {
        event.preventDefault();
        console.log("Correct");
        checkAnswer.textContent = "Correct!";
        score += 1;
    } else {
        timeLeft -= 10;
        checkAnswer.textContent = "Wrong! The correct answer is " + questions[questionNum].answer + " .";
    }


    // checks to see the number of the current question and then displays the next question
    if (questionNum < questions.length - 1) {
        questionNum++;
        displayQuestions(questionNum);
    } else {

        gameOver();
    }

    questionCount++;

}

// answer is confirmed and status displayed when each answer is selected
for (var i = 0; i < allOptionButtons.length; i++) {
    allOptionButtons[i].addEventListener("click", confirmAnswer);
}

// hides the question box and displays the scores
function gameOver() {
    questionBox.style.display = "none";
    completed.style.display = "block";
    finalScore.textContent = score;


}
// provide initials and store high score in local storage
function createHighScore(event) {
    event.preventDefault();
    if (initialValue.value == "") {
        alert("Please enter your initials")
        return;
    }

    var playerScore = {
        initials: initialValue.value,
        mark: finalScore.textContent

    };
    scoresList.push(playerScore);

    scoresList.sort(function (a, b) { return b - a });
    console.log(scoresList);
    for (var i = 0; i < scoresList.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.setAttribute("class", "high-score");
        highscoreEl.innerHTML = scoresList[i].initials + " - " + scoresList[i].mark;
        highScoreList.appendChild(highscoreEl);
    }
    saveHighScore();
    displayHighscore();
}



// this shows the high score
function saveHighScore() {
    localStorage.setItem("highscores", JSON.stringify(scoresList));
}
//load high score
function showHighScore() {
    var storedHighscore = localStorage.getItem("highscores");
    if (!storedHighscore) {
        return false

    }
    storedHighscore = JSON.parse(storedHighscore);
    storedHighscore.sort(function (a, b) { return b - a });
    for (var i = 1; i < storedHighscore.length; i++) {
        highscoreEl = document.createElement("li");
        highscoreEl.className = "high-score";
        highscoreEl.innerHTML = storedHighscore[i].initials + " - " + storedHighscore[i].mark;
        console.log(highscoreEl.innerHTML);
        highScoreList.appendChild(highscoreEl);
    }

}
function displayHighscore() {
    highScore.style.display = "block";
    completed.style.display = "none";
}
showHighScore();

function clearScore() {



    scoresList = [];
    localStorage.clear();
}

initialsForm.addEventListener("submit", createHighScore); //on clicking Submit, the score is displayed
gobackBtn.addEventListener("click", function (event) {   //on clicking the go back button, the game starts all over again
    event.preventDefault();
    highScore.style.display = "none";
    quizBox.style.display = "block";
    location.reload();

})
clearHighscores.addEventListener("click", clearScore); //I couldnt get this to work