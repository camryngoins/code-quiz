var questionTitleEl = document.querySelector("h1");
var buttonArray = document.querySelectorAll(".btn");
var answerEl = document.querySelector(".answer");
var timerEl = document.querySelector(".timer");
var sec =75;

// function to begin the quiz 
var startGame = function () {
    timer();
    questionTitleEl.innerText = questions[0].question;

    //change the inner text of each button to each choice
    for (var i = 0; i < buttonArray.length; i++) {
        buttonArray[i].innerText = questions[0].choices[i]
        buttonArray[i].addEventListener("click", (e) => checkAnswer(e.target.innerText))
    }
}
var checkAnswer = function(selectedAnswer) {
    if (selectedAnswer === questions[0].answer) {
        answerEl.innerText = "Correct!";
        answerEl.style.visibility = "visible"
    }
    else {
        answerEl.innerText = "Wrong!";
        answerEl.style.visibility = "visible";
        sec = sec - 15;
    }
}

var timer = function() {
    var timer = setInterval (function() {
        timerEl.innerHTML = sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// An array of all of the questions that will be asked in the code quiz
var questions = [
    {
        question: 'Which is not a primitive type in javascript?',
        choices: ["A: Boolean",
            "B: String",
            "C: Array",
            "D: Number"],
        answer: 'C: Array'
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
        "D: 'None of the above."],
        answer: "A: /* This is a comment! */"
    },
    {
        question: 'Which HTML tag is used to define a javascrip file?',

        choices : ["A: <style>",
        "B: <script>",
        "C: <js>",
        "D: <css>'"],

        answer: '<script>'
    }
]
startGame();