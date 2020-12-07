//!!game state
var quizScore = 0;
var currentQuestion = 0;
//
//!!queryselectors
var startButton = document.querySelector("#start-button");
var questionEl = document.querySelector("#question");
var startEl = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");
var answerButtons;
var resultEL = document.getElementById("end");
var restartButton = document.querySelector("#restart-button");

//
//!! function for start buttone
function startQuiz() {
  console.log("CONSOLELOGA1");
  startEl.setAttribute("class", "hide");
  questionsDiv.classList.remove("hide");

  loadQuestion();

  // nextQuestion();
  // showOptions();
  timeLeftCountdown();
}
function endQuiz() {
  questionsDiv.setAttribute("class", "hide");
  resultEL.classList.remove("hide");
  startButton.classList.remove("hide");
  currentQuestion = 0;
}
//help me navigate quiz
function navigateQuiz() {
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
function restartQuiz() {
  currentQuestion = 0;

  startEl.setAttribute("class", "hide");
  questionsDiv.classList.remove("hide");
  resultEL.setAttribute("class", "hide");

  loadQuestion();

  // nextQuestion();
  // showOptions();
  timeLeftCountdown();
}

var counter = 90;
// // //TODO (MAKE QUERY SELECTOR) clockTimeLeftEl.innerText = `time: ${counter}`;

//!!function that is going to take care of handeling the next question
function loadQuestion() {
  console.log("CONSOLELOGA2");
  //debugger
  var question = questions[currentQuestion];
  questionEl.textContent = question.text;
  console.log(question.options);
  var answerButtons = document.getElementById("answerButtons");
  answerButtons.innerHTML = "";
  question.options.forEach((answer) => {
    answerButtons.innerHTML += `<button onclick="javascript:checkQuestion('${answer}')" class="buttonClass" id="${answer}">${answer}</button>`;
  });

  //  var jQueoryTest = $("test");
  // var ES6String = `${}
  //?? var answers = answerList[currentQuestion];
  //?? console.log(answers);
  //?? for (var i = 0; i < questionsList.length; i++) {
  //??   answerButtons = document.createElement("button");
  //??   console.log(answerButtons);
  //??   answerButtons.textContent = answers[i];
  //??   answerButtons.onclick = document //function to be made later it is going to check if somthing is correct if it is () => checkQuestion(answers[i])
  //??     .querySelector("#answerButtons")
  //??     .appendChild(answerButtons)
  //??     .classList.add("buttonClass");
  //??   console.log("CONSOLELOGA4");
}
function checkQuestion(choice) {
  console.log("user selected choice: " + choice);
  let question = questions[currentQuestion];
  if (question.correctAnswer === choice) {
    currentQuestion++;
    navigateQuiz();
  } else {
    //?? console.log("incorrect answer" + choice ) //old ass shit
    console.log(`incorrect answer ${choice}`); //ES6
    //if they are right what
  }
}
//!!function for timer which shows how much time left on quiz
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
//!! function to display questions from array in questions.js
function showOptions() {
  console.log("CONSOLELOGA3");
  var answers = answerList[currentQuestion];
  console.log(answers);
  for (var i = 0; i < questionsList.length; i++) {
    // document.querySelector(`#answer${i}`).textContent = answers[i];
    answerButtons = document.createElement("button");
    console.log(answerButtons);
    answerButtons.textContent = answers[i];
    answerButtons.onclick = document //function to be made later it is going to check if somthing is correct if it is () => checkQuestion(answers[i])
      .querySelector("#answerButtons")
      .appendChild(answerButtons)
      .classList.add("buttonClass");

    console.log("CONSOLELOGA4");
  }
}
var correctAnswers;

var addTimeIfCorrect = function () {
  if (correctAnswers === true) {
    timeLeftCountdown + 10000;
  }
};
//?? answerButtons
//??   .getElementsByClassName("buttonClass")
//??   .addEventListener("click", function () {
//??     console.log("answer clicked");
//??   });ddd
//TODO the div with the questions is loads on page loads and it is hidden until the user click the start button so i looks like the start button is starting the questions but it is not it is just unhiding the questions

// REFERENCEvar askQuestionEl = document.createElement("li");
//TODO inside of next quesion we want to give each answer a button and put it on the screen.

//TODO each button should have  click listener that handles answering a question

//// the click listener should handles scores and penalties then handle moving on to the next question

//TODO if there are nomore questions the listener should call a function that handles ending the game

//TODO random tasks timers, scores, stuff like that
