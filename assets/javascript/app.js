console.log("trivia!");

var player = {
  isPlaying: false,
  questionCorrect: 0,
  questionIncorrect: 0,
  wins: 0,
  losses: 0
}

function questionObject(question, answers, correctAnswer, userAnswer, isCorrect, isTimeUp){
  this.question = question;
  this.answers = answers;
  this.correctAnswer = this.answers[correctAnswer];
  this.userAnswer = this.answers[userAnswer];
  this.isCorrect = isCorrect;
  this.isTimeUp = isTimeUp;
}

<<<<<<< HEAD
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
    mainAnswersColumn.appendTo("#answersRow");
  };
}

$(document).on("click","#buttonTest", function(){
  console.log("buttonClicked");

  $("#questionColumn").remove();
  $("#answersColumn").remove();
=======
var question1 = new questionObject("What is the capital of the US", ["Washington DC", "Dallas", "Houston", "Los Angeles"], 0, 4, false, false);
>>>>>>> parent of 2b4b1a3... :constructio C correctly display question and answers

var question2 = new questionObject("What is the capital of Mexico", ["Guadalajara", "Mexico City", "Monterrey", "Ciudad Juarez"], 0, 4, false, false);
