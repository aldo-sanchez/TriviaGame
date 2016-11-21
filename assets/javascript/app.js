console.log("trivia!");

var player = {
  isPlaying: false,
  isWaiting: false,
  numberCorrect: 0,
  numberIncorrect: 0,
  wins: 0,
  losses: 0
}

var questionsArray = [];
var currentQuestion;
var gameStatus = [];
var questionTimer;
var summaryTimer;

$(document).ready(function(){
  initialization();  
});

function initialization(){
  player.isPlaying = !player.isPlaying;
  questionsArray = createQuestionArray();
}

function createQuestionArray(){
  function questionObject(question, answers, correctAnswer, userAnswer, isCorrect, isTimeUp){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = this.answers[correctAnswer];
    this.userAnswer = this.answers[userAnswer];
    this.isCorrect = isCorrect;
    this.isTimeUp = isTimeUp;
  }

  var question1 = new questionObject("What is the capital of the US?", ["Washington DC", "Dallas", "Houston", "Los Angeles", null], 0, 4, false, false);

  var question2 = new questionObject("What is the capital of Mexico?", ["Guadalajara", "Mexico City", "Monterrey", "Ciudad Juarez", null], 1, 4, false, false);

  var question3 = new questionObject("What is the capital of Venezuela?", ["Merida", "Barquisimeto", "Caracas", "Maracaibo", null], 2, 4, false, false)

  return questionsArray = [question1, question2, question3];
}

function startQuestionTimer(){
  questionTimer = setTimeout(questionTimeRanOut,10000);
}

function startSummaryTimer(){
  player.isWaiting = !player.isWaiting;
  if (questionsArray.length > 0){
   summaryTimer = setTimeout(setQuestionAnswers,3000);
  }
  else{
    summaryTimer = setTimeout(endGame,3000);
  }
}

function stopQuestionTimer(){
  clearTimeout(questionTimer);
}

function stopSummaryTimer(){
  clearTimeout(summaryTimer);
}

function questionTimeRanOut(){
  
  currentQuestion.isTimeUp = !currentQuestion.isTimeUp;
  console.log("time ran out!" + currentQuestion.isTimeUp + currentQuestion.userAnswer)
  setUserSelection();
}

function setQuestionAnswers(){
  removeQuestionAnswers();
  if (player.isWaiting){
    player.isWaiting = !player.isWaiting;
  }
  selectRandomQuestion();
  displayQuestion();
  displayAnswers();
  startQuestionTimer();
}


function selectRandomQuestion(){
  var randomIndex = Math.floor(Math.random()*questionsArray.length);
  currentQuestion = questionsArray[randomIndex];

  // remove question from array.  
  questionsArray.splice(randomIndex,1);
}

function displayQuestion(){
var mainQuestionColumn = $("<div></div>");
  mainQuestionColumn.attr({
    class: "col-md-12",
    id: "questionColumn"
  });

  var questionRowDiv = $("<div></div>");
  questionRowDiv.attr({
    class:"row",
    id:"individualQuestionRow"
  });

  var questionColumnDiv = $("<div></div>");
  questionColumnDiv.attr({
    class: "col-md-12 question",
    id: "individualQuestionColumn"
  });

  var questionText = $("<h2></h2>");
  questionText.text(currentQuestion.question);

  questionText.appendTo(questionColumnDiv);
  questionColumnDiv.appendTo(questionRowDiv);
  questionRowDiv.appendTo(mainQuestionColumn);
  mainQuestionColumn.appendTo("#questionRow");
}

function displayAnswers(){
  var mainAnswersColumn = $("<div></div>");
  mainAnswersColumn.attr({
    class: "col-md-12",
    id: "answersColumn"
  });

  for (i = 0; i < currentQuestion.answers.length - 1; i++){
    var answersRowDiv = $("<div></div>");
    answersRowDiv.attr({
      class: "row",
      id: "answerRow" + i
    })
    
    var answersColumnDiv = $("<div></div>");
    answersColumnDiv.attr({
      class: "col-md-3 answers",
      id: "answer" + i
    });
    var answersText = $("<h2></h2>"); 
    answersText.text(currentQuestion.answers[i]);

    answersText.appendTo(answersColumnDiv);
    answersColumnDiv.appendTo(answersRowDiv)
    answersRowDiv.appendTo(mainAnswersColumn);
    mainAnswersColumn.appendTo("#answersRow")
  };
}

function userSelection(i){
  currentQuestion.userAnswer = currentQuestion.answers[i];
}

function checkAnswer(){
  if (currentQuestion.correctAnswer == currentQuestion.userAnswer){
    currentQuestion.isCorrect = !currentQuestion.isCorrect;
    player.numberCorrect++;
  }
  else{
    player.numberIncorrect++;
  }
  console.log(currentQuestion);
}

function collectGameStatus(){
  gameStatus.push(currentQuestion);
  console.table(gameStatus);
}

function setUserSelection(){
  checkAnswer();
  collectGameStatus();
  stopQuestionTimer();
  summarizeQuesiton();
  displaySummaryQuestion();
  startSummaryTimer(); 
}

function summarizeQuesiton(){
  if (currentQuestion.isCorrect){
    $(".modal-title").text("Good Job! You answered correctly!");
    $(".modal-body").text(currentQuestion.correctAnswer);

  } else{
    $(".modal-title").text("Wrong answer... The correct answer is:")
    $(".modal-body").text(currentQuestion.correctAnswer);
  }
}

function displaySummaryQuestion(){
  $("#myModal").modal("show");  
}

function displayFinalSummary(){
  var summaryColumn = $("<div></div>");
  summaryColumn.addClass("col-md-12");
  summaryColumn.attr("id", "summaryColumn");

  var questionsCorrectRow = $("<div></div>");
  questionsCorrectRow.addClass("col-md-12");
  questionsCorrectRow.attr("id", "questionsCorrectRow");

  var questionsCorrectColumn = $("<div></div>");
  questionsCorrectColumn.addClass("col-md-12");
  questionsCorrectColumn.attr("id", "questionsCorrect");
  questionsCorrectText = $("<h2></h2>");

  questionsCorrectText.text("Number of questions correct: " + player.numberCorrect);

  questionsCorrectText.appendTo(questionsCorrectColumn);
  questionsCorrectColumn.appendTo(questionsCorrectRow);
  questionsCorrectRow.appendTo(summaryColumn);

  var questionsIncorrectRow = $("<div></div>");
  questionsIncorrectRow.addClass("col-md-12");
  questionsIncorrectRow.attr("id", "questionsIncorrectRow");

  var questionsIncorrectColumn = $("<div></div>");
  questionsIncorrectColumn.addClass("col-md-12");
  questionsIncorrectColumn.attr("id", "questionsIncorrect");
  questionsIncorrectText = $("<h2></h2>");

  questionsIncorrectText.text("Number of questions incorrect: " + player.numberIncorrect);

  questionsIncorrectText.appendTo(questionsIncorrectColumn);
  questionsIncorrectColumn.appendTo(questionsIncorrectRow);
  questionsIncorrectRow.appendTo(summaryColumn);
  summaryColumn.appendTo("#summaryRow");
}

function endGame(){
    removeQuestionAnswers();
    displayFinalSummary();
    console.log("game is over");
    console.table(gameStatus);
    player.isPlaying = !player.isPlaying;
}


function removeQuestionAnswers(){
  $("#myModal").modal("hide");
  $("#questionColumn").remove();
  $("#answersColumn").remove();
}

$(document).on("click","#startGameButton", function(){
  setQuestionAnswers();
  // startQuestionTimer();
  $("#startGameButton").hide();
});

$(document).on("click", ".answers", function(){
  if (!player.isWaiting && player.isPlaying){
    console.log($(this).attr("id"));
    var selectedAnswer = $(this).attr("id");
    selectedAnswer = parseInt(selectedAnswer.charAt(6));
    userSelection(selectedAnswer);
    setUserSelection();
    console.log(selectedAnswer);
  }
});