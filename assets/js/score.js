var highScoresEl = document.querySelector("#highscores")

var getHighScore = function() {
    // Check local storage for highscore 
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }

}