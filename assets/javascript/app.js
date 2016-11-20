console.log("trivia!");

var player = {
  isPlaying: false,
  questionCorrect: 0,
  questionIncorrect: 0,
  wins: 0,
  losses: 0
}

var questionsArray = [];
var currentQuestion;
var gameStatus = [];
var timer;


$(document).ready(function(){
  initialization();
  questionsArray = createQuestionArray();
  
  
});

function initialization(){
  player.isPlaying = !player.isPlaying;
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

function startTimer(){
  timer = setTimeout(timeRanOut,5000);
}

function stopTimer(){
  clearTimeout(timer);
}

function timeRanOut(){
  currentQuestion.isTimeUp = !currentQuestion.isTimeUp;
  console.log("time ran out!" + currentQuestion.isTimeUp + currentQuestion.userAnswer)
  collectGameStatus();
  setQuestionAnswers();
}

function setQuestionAnswers(){
  $("#questionColumn").remove();
  $("#answersColumn").remove();

  selectRandomQuestion();
  displayQuestion();
  displayAnswers();
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
  }
  console.log(currentQuestion);
}

function collectGameStatus(){
  gameStatus.push(currentQuestion);
  console.table(gameStatus);
}

// test button to dispaly quesiton.
$(document).on("click","#startGameButton", function(){
  setQuestionAnswers();
  startTimer();
  $("#startGameButton").hide();
});

$(document).on("click", ".answers", function(){
  console.log($(this).attr("id"));
  var selectedAnswer = $(this).attr("id");
  selectedAnswer = parseInt(selectedAnswer.charAt(6));
  userSelection(selectedAnswer);
  checkAnswer();
  collectGameStatus();
  stopTimer();
  setQuestionAnswers();

  console.log(selectedAnswer);
});

