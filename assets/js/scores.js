const highscoresID = document.querySelector("#highscores");

const highscoresFromStorage = JSON.parse(localStorage.getItem("highscores"));

console.log(highscoresFromStorage);

for (let i = 0; i < highscoresFromStorage.length; i++) {
    const score = document.createElement("li");
    score.textContent = highscoresFromStorage[i].initial + " - " + highscoresFromStorage[i].score;
    highscoresID.appendChild(score);
}

