// * A start button that when clicked a timer starts and the first question appears.

// * Questions contain buttons for each answer.

// * When answer is clicked, the next question appears

// * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

// * When the game ends, it should display their score and give the user the ability to save their initials and their score


// index.html
// - Define the questions and the choices and the answers, put it in a variable in questions.js file
// - Timer -> add event listener to "start quiz" button and trigger the timer
// - Display first question - add click event listener to "start quiz" button and display the first question based on the questions that we have defined
// - Hide the start screen and remove hide from the questions screen
// - Populate questions screen with questions and the choices
// - Add buttons with the class of choice ( to add event listeners to it)
// - Add event listener to the choices div and check if the choice button is clicked
// - If correct, display correct answer in feedback div, hide feedback div then display next question,
// - If incorrect, subtract the timer, display "wrong answer" in feedback div, check the timer (if timer > 0 hide feedback div then display next question, if timer <= 0 hide feedback div then go display "end-screen and hide question screen")


// highscores.html 
// - Retrieve highscores from local storage
// - sort the scores from highest to lowest
// - Display the highscores as a list
// - When the user clicks on "clear highscores", clear local storage


// A list of query selectors
const startQuizButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questions = document.querySelector("#questions");
const choices = document.querySelector("#choices")
const endScreen = document.querySelector("#end-screen");
const questionTitle = document.querySelector("#question-title");
const time = document.querySelector("#time");
const feedback = document.querySelector("#feedback");
const submitButton = document.querySelector("#submit")

// A function to grab the new score and initials
function newScore() {
    let highscoresFromStorage = JSON.parse(localStorage.getItem("highscores"));

    if (highscoresFromStorage === null) {
        highscoresFromStorage = [];
    }

    const newScore = {
        initial: document.getElementById("initials").value,
        score: count,
    };

    highscoresFromStorage.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscoresFromStorage));

    console.log(highscoresFromStorage)

}

// Timer that starts from 75 and ends at 0
let i = 0;
let count = 75;

function timer() {

    const interval = setInterval(function () {
        count--;
        time.textContent = count;
        if (count <= 0 || ((i + 1 === questionsAndAnswers.length))) {
            clearInterval(interval);
        }
    }, 1000);
}

// Questions and choices
let currentQuestion = questionTitle.textContent = questionsAndAnswers[i].question;

const choiceAButton = document.createElement("button");
choiceAButton.textContent = questionsAndAnswers[i].choiceA;
choiceAButton.classList = "choice";
choices.appendChild(choiceAButton);

const choiceBButton = document.createElement("button");
choiceBButton.textContent = questionsAndAnswers[i].choiceB;
choiceBButton.classList = "choice";
choices.appendChild(choiceBButton);

const choiceCButton = document.createElement("button");
choiceCButton.textContent = questionsAndAnswers[i].choiceC;
choiceCButton.classList = "choice";
choices.appendChild(choiceCButton);

const choiceDButton = document.createElement("button");
choiceDButton.textContent = questionsAndAnswers[i].choiceD;
choiceDButton.classList = "choice";
choices.appendChild(choiceDButton);

const choice = document.querySelectorAll(".choice");

choice.forEach(function (button) {
    button.addEventListener("click", choiceClick)
});

function feedbackTimer() {
    feedback.classList.add("hide");
}

function choiceClick() {
    // if statement to check if answer was correct or not
    if (questionsAndAnswers[i].answer === this.textContent) {
        feedback.textContent = "Correct!";
        feedback.classList.remove("hide");
        setTimeout(feedbackTimer, 1000);
        console.log("Correct!");
    } else {
        feedback.textContent = "Wrong!"
        count = count - 10;
        feedback.classList.remove("hide");
        setTimeout(feedbackTimer, 1000);
        console.log("Incorrect");
    }

    // if statement to check if theres any timer left or any questions left
    if ((i + 1) === questionsAndAnswers.length || count <= 0) {
        questions.classList.add("hide");
        endScreen.classList.remove("hide");
        submitButton.addEventListener("click", newScore)
    } else {
        i++;
        questionTitle.textContent = questionsAndAnswers[i].question;
        choiceAButton.textContent = questionsAndAnswers[i].choiceA;
        choiceBButton.textContent = questionsAndAnswers[i].choiceB;
        choiceCButton.textContent = questionsAndAnswers[i].choiceC;
        choiceDButton.textContent = questionsAndAnswers[i].choiceD;

    }
}

// The function to start the quiz
startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.add("hide");
    questions.classList.remove("hide");
    time.textContent = count;
    timer();
}
