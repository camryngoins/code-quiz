// set global variables
var headerEl = document.querySelector(".header");
var highScoresButtonEl = document.querySelector("#high-scores");
var timerEl = document.querySelector(".timer");
var quizContainerEl = document.querySelector(".quiz-container");
var startQuizEl = document.querySelector(".start-quiz");
var quizTitleEl = document.querySelector(".quiz-title");
var quizOverviewEl = document.querySelector(".quiz-overview");
var buttonEl = document.querySelector(".btn");
var startQuizButtonEl = document.querySelector("#start-btn");


// An array of all of the questions that will be asked in the code quiz
var questions = [
    {
        question: 'Which is not a primitive type in javascript?',

        choiceA: 'Boolean',
        choiceB: 'String',
        choiceC: 'Array',
        choiceD: 'Number',

        answer: 'Array'
    },
    {
        question: 'Which of the elements can be used to create a numbered list?',

        choiceA: '<ul>',
        choiceB: '<li>',
        choiceC: '<br>',
        choiceD: '<ol>',

        answer: '<ol>'
    },
    {
        question: 'How would you add a comment in CSS?',

        choiceA: '/* This is a comment! */',
        choiceB: '<-- This is a comment! -->',
        choiceC: '// This is a comment //',
        choiceD: 'None of the above.',

        answer: '/* This is a comment! */'
    },
    {
        question: 'Which HTML tag is used to define a javascrip file?',

        choiceA: '<style>',
        choiceB: '<script>',
        choiceC: '<js>',
        choiceD: '<css>',

        answer: '<script>'
    }
]

var getHighScore = function() {
    // Check local storage for highscore 
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }
}