var highScore = 0;
var newScore = 0;

var getHighScore = function() {
    // Check local storage for highscore 
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }
    
}