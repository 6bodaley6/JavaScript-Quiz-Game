//!!game state
var quizScore = 0;
var currentQuestion = 0;
var counter = 90;
//
//!!queryselectors
var timerDiv = document.querySelector("#timer");
var startButton = document.querySelector("#start-button");
var questionEl = document.querySelector("#question");
var startEl = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");
var answerButtons;
var resultEL = document.getElementById("end");
var restartButton = document.querySelector("#restart-button");

function startQuiz() {
  startEl.setAttribute("class", "hide");
  questionsDiv.classList.remove("hide");
  loadQuestion();
  timeLeftCountdown();
}
function endQuiz() {
  questionsDiv.setAttribute("class", "hide");
  resultEL.classList.remove("hide");
  startButton.classList.remove("hide");
  currentQuestion = 0;
  quizScore = counter;
  console.log("your score is" + quizScore);
}
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
  counter = 90;
  updateTimer();

  startEl.setAttribute("class", "hide");
  questionsDiv.classList.remove("hide");
  resultEL.setAttribute("class", "hide");
  loadQuestion();
  timeLeftCountdown();
}
function loadQuestion() {
  var question = questions[currentQuestion];
  questionEl.textContent = question.text;
  console.log(question.options);
  var answerButtons = document.getElementById("answerButtons");
  answerButtons.innerHTML = "";
  question.options.forEach((answer) => {
    answerButtons.innerHTML += `<button onclick="javascript:checkQuestion('${answer}')" class="buttonClass" id="${answer}">${answer}</button>`;
  });
}
function checkQuestion(choice) {
  console.log("user selected choice: " + choice);
  let question = questions[currentQuestion];
  if (question.correctAnswer === choice) {
    addTimeIfCorrect();

    currentQuestion++;
    navigateQuiz();
  } else {
    console.log(`incorrect answer ${choice}`);
    removeTimeIfWrong();
  }
}
function timeLeftCountdown() {
  updateTimer();
  var LeftCountdown = setInterval(function () {
    counter--;
    updateTimer();
    if (counter === 0) {
      clearInterval(LeftCountdown);
      endQuiz();
    }
  }, 1000);
}
//!! function to display questions from array in questions.js
function showOptions() {
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
  }
}
var addTimeIfCorrect = function () {
  counter = counter + 5;
  updateTimer();
};
var removeTimeIfWrong = function () {
  counter = counter - 10;
  updateTimer();
  if (counter <= 0) {
    endQuiz();
  }
};
function updateTimer() {
  timerDiv.innerText = `time: ${counter}`;
}
function saveHighScore() {
  var initials = document.getElementById("initials-input").value;
  var highScores = [];
  var currentUserHighScore = { initials, highScore: quizScore };
  highScores.push(currentUserHighScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  console.log(localStorage);
}
document
  .getElementById("save-high-score")

  .addEventListener("click", saveHighScore);

//TODO the div with the questions is loads on page loads and it is hidden until the user click the start button
//TODO -so it looks like the start button is starting the questions but it is not it is just unhiding the questions
//  var jQueoryTest = $("test");
// var ES6String = `${}
