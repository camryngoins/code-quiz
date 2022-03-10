// An array of all of the questions that will be asked in the code quiz
var questions = [
    {
        question: 'Which is not a primitive type in javascript?',
        choices: ["A: Boolean",
            "B: String",
            "C: Array",
            "D: Number"],
        answer: "C: Array"
    },
    {
        question: 'Which of the elements can be used to create a numbered list?',

        choices: ["A: <ul>",
        "B: <li>",
        "C: <br>",
        "D: <ol>"],
        answer: "D: <ol>"
    },
    {
        question: 'How would you add a comment in CSS?',

       choices : [ "A: /* This is a comment! */",
        "B: <-- This is a comment! -->",
        "C: // This is a comment //",
        "D: None of the above."],
        answer: "A: /* This is a comment! */"
    },
    {
        question: 'Which HTML tag is used to define a javascript file?',

        choices : ["A: <style>",
        "B: <script>",
        "C: <js>",
        "D: <css>"],

        answer: "B: <script>"
    }
]

// list of global variables 
var questionTitleEl = document.querySelector("h1");
var buttonArray = document.querySelectorAll(".btn");
var answerEl = document.querySelector(".answer");
var timerEl = document.querySelector(".timer");
var containerEl = document.querySelector(".container");
var showScoreEl = document.querySelector(".showScore");
var inputName = document.querySelector(".inputName");
var submitScore = document.querySelector(".submitScore");
var sec =75;
var index = 0;
var score = 0;
var isGameOver = false;

var timer = function() {
    var timer = setInterval (function() {
        timerEl.textContent = "Time : " + sec;
        sec--;
        if (isGameOver) {
            clearInterval(timer);
            timerEl.textContent = "Game over!";
        }
        if (sec === 0) {
            clearInterval(timer);
            timerEl.textContent = "Time is up!";
        }
    }, 1000);

};

// function to begin the quiz 
var startGame = function () {

    //change the inner text of each button to each choice
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", (e) => checkAnswer(e.target.innerText))
    } 
    nextQuestion()
}
var checkAnswer = function(selectedAnswer) {
    if (selectedAnswer === questions[index].answer) {
        answerEl.innerText = "Correct!";
        answerEl.style.visibility = "visible"
        score++
    }
    else {
        answerEl.innerText = "Wrong!";
        answerEl.style.visibility = "visible";
        sec = sec - 15;
    }
    if (index === questions.length - 1) {
        isGameOver = true;
        containerEl.style.visibility = "hidden";
        showScoreEl.innerText = "Score " + score;
        sec = 0
    }

    if(sec > 0) {
        index++;
        setTimeout(function() {
            answerEl.style.visibility = "hidden"
            nextQuestion()}, 750) 
    }
};

var nextQuestion = function() {
    questionTitleEl.innerText = questions[index].question;

    //change the inner text of each button to each choice
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].innerText = questions[index].choices[i];
    }
};
var submitScore = function() {
    var name = inputName.value;
    var currentScores =localStorage.getItem("currentScores");

        if (!currentScores) {
            currentScores = [];
        }
        currentScores.push({
            name, score
        })
        localStorage.setItem("currentScores", currentScores);
};

timer();
startGame();