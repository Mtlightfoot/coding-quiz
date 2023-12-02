

const highscores = [];

const highscoresFromStorage = JSON.parse(localStorage.getItem("highscores"));

highscores.push(highscoresFromStorage);



console.log(highscores);

