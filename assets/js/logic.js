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

const startQuizButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questions = document.querySelector("#questions");
const choices = document.querySelector("#choices")
const endScreen = document.querySelector("#end-screen");
const questionTitle = document.querySelector("#question-title");

let i = 0;

const currentQuestion = questionTitle.textContent = questionsAndAnswers[i].question;

const choiceAButton = document.createElement("button");
choiceAButton.textContent = questionsAndAnswers[i].choiceA;
choices.appendChild(choiceAButton);

const choiceBButton = document.createElement("button");
choiceBButton.textContent = questionsAndAnswers[i].choiceB;
choices.appendChild(choiceBButton);

const choiceCButton = document.createElement("button");
choiceCButton.textContent = questionsAndAnswers[i].choiceC;
choices.appendChild(choiceCButton);

const choiceDButton = document.createElement("button");
choiceDButton.textContent = questionsAndAnswers[i].choiceD;
choices.appendChild(choiceDButton);


startQuizButton.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.classList.add("hide");
    questions.classList.remove("hide");
}

