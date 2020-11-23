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
  console.log("CONSOLELOGA1");
  startEl.setAttribute("class", "hide");
  questionsDiv.classList.remove("hide");
  nextQuestion();
  showOptions();
}
//
startButton.addEventListener("click", startQuiz);
var counter = 90;
//TODO (MAKE QUERY SELECTOR) clockTimeLeftEl.innerText = `time: ${counter}`;

//!!function that is going to take care of handeling the next question
function nextQuestion() {
  console.log("CONSOLELOGA2");
  var question = questionsList[currentQuestion].q;
  questionEl.textContent = question;
}
//!!function for time left on quiz
function timeLeftCountdown() {
  document.createElement("div").innerText = `time: ${counter}`;
  //// clockTimeLeftEl.innerText = `time: ${counter}`
  var LeftCountdown = setInterval(function () {
    counter--;
    if (counter === 0) {
      clearInterval(LeftCountdown);
    }
  }, 1000);
}

//!!function for to take away time if question is answered wrong

function showOptions() {
  console.log("CONSOLELOGA3");
  var answers = answerList[currentQuestion];
  console.log(answers);
  for (var i = 0; i < questionsList.length; i++) {
    // document.querySelector(`#answer${i}`).textContent = answers[i];
    var answer_buttons = document.createElement("button");
    console.log(answer_buttons);
    answer_buttons.textContent = answers[i];
    answer_buttons.onclick = document //function to be made later it is going to check if somthing is correct if it is () => checkQuestion(answers[i])
      .querySelector("#answer_buttons")
      .appendChild(answer_buttons);
    console.log("CONSOLELOGA4");
  }
}
var checkQuestion = function () {};
function wrongAnswer() {}

// REFERENCEvar askQuestionEl = document.createElement("li");
//TODO inside of next quesion we want to give each answer a button and put it on the screen.

//TODO each button should have  click listener that handles answering a question

//TODO the click listener should handles scores and penalties then handle moving on to the next question

//TODO if there are nomore questions the listener should call a function that handles ending the game

//TODO random tasks timers, scores, stuff like that
