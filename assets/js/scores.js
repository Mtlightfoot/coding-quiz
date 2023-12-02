// query selectors
const highscoresID = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");

// creates variable that holds all current local storage scores
const highscoresFromStorage = JSON.parse(localStorage.getItem("highscores"));

// for loop to add new scores to the high score table
for (let i = 0; i < highscoresFromStorage.length; i++) {
    const score = document.createElement("li");
    score.textContent = highscoresFromStorage[i].initial + " - " + highscoresFromStorage[i].score;
    highscoresID.appendChild(score);
}

clearButton.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});