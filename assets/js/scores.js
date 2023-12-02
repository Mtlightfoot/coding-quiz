const highscoresID = document.querySelector("#highscores");

const highscores = [];

const highscoresFromStorage = JSON.parse(localStorage.getItem("highscores"));

const li = document.createElement("li");
li.textContent = highscores[0].initial + " - " + highscores[0].score;
highscoresID.appendChild(li)

console.log(highscores);

function addScore() {
    JSON.parse(localStorage.getItem("highscores"));
    highscores.push(highscoresFromStorage);

}

