// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
//!!game state
var quizScore = 0;
var currentQuestion = 0;
//
//!!queryselectors
var startButton = document.querySelector("#start-button");
var questionEl = document.querySelector("#question");
var startEl = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");
//
//!! function for start button
function startQuiz() {
  console.log("CONSOLEA1");
  startEl.setAttribute("class", "hide");
  questionsDiv.removeAttribute("class");
  nextQuestion();
}
//
startButton.addEventListener("click", startQuiz);
//!!function that is going to take care of handeling the next question
function nextQuestion() {
  console.log("CONSOLEA2");
  var question = questions[currentQuestion].q;
  questionEl.textContent = question;
}

//

//!! inside of next quesion we want to give each answer a button and put it on the screen.
-(
  //!! each button should have  click listener that handles answering a question

  //!! the click listener should handles scores and penalties then handle moving on to the next question

  //!! if there are nomore questions the listener should call a function that handles ending the game

  //!! random tasks timers, scores, stuff like that
  142562536
);
