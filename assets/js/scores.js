// query selectors
const highscoresID = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");

// creates variable that holds all current local storage scores
let highscoresFromStorage = JSON.parse(localStorage.getItem("highscores"));

if (highscoresFromStorage === null) {
    highscoresFromStorage = [];
}


// function to organise high scores in score order on high score table
function compare(a, b) {

    if (a.score > b.score) return 1;
    if (b.score > a.score) return -1;

    return 0;
}

highscoresFromStorage = highscoresFromStorage.sort(compare);

// for loop to add new scores to the high score table
for (let i = 0; i < highscoresFromStorage.length; i++) {
    const score = document.createElement("li");
    score.textContent = highscoresFromStorage[i].initial + " - " + highscoresFromStorage[i].score;
    highscoresID.appendChild(score);
}

// clear button to clear highscores off the table
clearButton.addEventListener("click", function () {
    localStorage.clear();
    highscoresID.innerHTML = "";
});