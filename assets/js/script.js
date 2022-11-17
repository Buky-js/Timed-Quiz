

var time = document.querySelector(".time");
var timer = document.querySelector(".timer");
var highscore = document.querySelector(".highscore");
var timeLeft = 60;
var btn = document.querySelector(".btn");
var questionBox = document.querySelector(".question-box");
var startBox = document.querySelector(".start-box");
var quizBox = document.querySelector(".quiz-box");
var quizQuestion = document.querySelector(".quiz-question");

var questions = [
    {question: "Which is not a rainbow color?",
    option1:"red",
    option2:"black",
    option3: "orange",
    option4: "yellow",
    answer: "black"
    
    },
    {question: "What does USA mean?",
    option1:  "Unity Speaks Again",
    option2: "Umbrella State in America",
    option3:  "United States of America",
    option4: "Unspoken Sayings of America",
    answer: "United States of America",
    
    },
    {question: "What season do we have in January",
   
    option1: "summer",
    option2: "winter",
    option3: "spring",
    option4:"fall",
    answer: "winter"
    
    },
    {question: "Which is not a province in Canada?",
    option1: "New Brunswick",
    option2: "Manitoba",
    option3: "Ohio",
    option4: "Saskatchewan",
    answer: "Ohio"
    
    },
    {question: "Which animal is the fastest?",
    option1:  "cheetah",
    option2: "lion",
    option3: "giraffe",
    option4: "horse",
    answer: "cheetah",
    
    }
]

function setTimer(){
    var counter = setInterval(function(){
        timeLeft--;
        time.textContent = timeLeft;
        if(timeLeft===0){
        clearInterval(counter);
        }

    }, 1000);
}
var questionIndex = 0;
function displayQuestion(questionIndex){
    startBox.style.display = "none";
    // classList.add("hide");
    
    questionBox.style.display = "block";
    questionBox.appendChild(highscore);
    questionBox.appendChild(timer);
    // var firstQuestion = document.createElement("div");
    // firstQuestion.setAttribute("class", "quiz-question");
    // questionBox.appendChild(firstQuestion);
    quizQuestion.textContent = questions[questionIndex].question;
}

function displayOptions(){
    var option = document.createElement("button");
    option.setAttribute("class", "options");
    questionBox.appendChild(option);
    option.textContent = questions[questionIndex].option1;
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
displayOptions();
});
