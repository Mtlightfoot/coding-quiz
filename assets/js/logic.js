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
