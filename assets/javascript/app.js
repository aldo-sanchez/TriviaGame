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
  // initialization();  
});

function initialization(){
  player.isPlaying = !player.isPlaying;
  gameStatus = [];
  player.numberCorrect = 0;
  player.numberIncorrect = 0;
  questionsArray = createQuestionArray();
}

function createQuestionArray(){
  function questionObject(question, answers, correctAnswer, userAnswer, answerExplanation, isCorrect, isTimeUp){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = this.answers[correctAnswer];
    this.userAnswer = this.answers[userAnswer];
    this.answerExplanation = answerExplanation;
    this.isCorrect = isCorrect;
    this.isTimeUp = isTimeUp;
  }

  var question0 = new questionObject(
    /*question:*/ "What was the name of the first successful  satellite of the United States?",
    /*answers:*/ ["Sputnik 1", "Explorer 1", "Vanguard 1", "Echo 1", null],
    /*correctAnswer:*/ 1,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "After the failed launch of Vanguard TV3, and two successful Russian satellites (Sputnik 1 and 2), the United States successfully launched Explorer 1 on January 31, 1958.",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);
    

  var question1 = new questionObject(
    /*question:*/ "What was the first animal in space?",
    /*answers:*/ ["Dog", "Monkey", "Fruit Flies", "Mouse", null],
    /*correctAnswer:*/ 2,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "On February 20, 1947 the United States launched a V-2 rocket containing fruit flies, with the purpose of exploring the effects of radiation exposure at high altitudes.",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);

  var question2 = new questionObject(
    /*question:*/ "What was the name of the first animal carried into orbit?",
    /*answers:*/ ["Laika - dog", "Tsygan - dog", "Dezik - dog", "Gordo - squirrel monkey", null],
    /*correctAnswer:*/ 0,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "Laika was a stray dog from the streets of Moscow that was the sole occupant of Sputnik 2 (launched on November 3, 1957), and first animal to be set to orbit.",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);

  var question3 = new questionObject(
    /*question:*/ "Who was the first human in space?",
    /*answers:*/ ["John Glenn", "Yuri Gagarin", "Alan Shepard", "Neil Armstrong", null],
    /*correctAnswer:*/ 1,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "Soviet Yuri Gagarin was the first human in space when he completed an orbit of the Earth on April 12, 1961. His first words upon returning to Earth were to a woman and a girl near his capsule.  The woman asked, 'Can it be that you have come from outer space?' to which Gagarin replied: 'As a matter of fact, I have!'",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);

  var question4 = new questionObject(
    /*question:*/ "Who helped lead the development of the on-board flight software for the Apollo Moon missions?",
    /*answers:*/ ["Alan Turing", "Elon Musk", "Neil Armstrong", "Margaret Hamilton", null],
    /*correctAnswer:*/ 3,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "Margaret Hamilton was the Director of the Software Engineering Division of the MIT Instrumentation Laboratory. On November 22, 2016, she was awarded the Presidential Medal of Freedom by President Obama for her work leading the development of on-board flight software for NASA's Apolo Moon missions",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);

  var question5 = new questionObject(
    /*question:*/ "Which spacecraft was the first to reach escape velocity from the Solar System?",
    /*answers:*/ ["Voyager 1", "Voyager 2", "Pioneer 10", "Pioneer 11", null],
    /*correctAnswer:*/ 2,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "Developed at NASA's Ames Research Center, Pioneer 10 was designed to prepare NASA for the requirements of deep space travel of Voyager 1. It completed the first mission to Jupiter and was the first spacecraft to reach escape velocity from the Solar System. NASA received the last successful telemetry from Pioneer 10 on April 27, 2002; at that time the spacecraft was about 12 billion kilometers from Earth.",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);

  var question6 = new questionObject(
    /*question:*/ "Which Space Shuttle had no orbital capability and was only for approach and landing tests?",
    /*answers:*/ ["Enterprise", "Endeavour", "Discovery", "Atlantis", null],
    /*correctAnswer:*/ 0,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "Enterprise was the first orbiter of the Space Shuttle program. The orbiter was rolled out on September 17, 1976. Its goal was to perform atmospheric test flights.  Enterprise had no engines so for testing, the shuttle was launched from a modified Boeing 747.",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);

  var question7 = new questionObject(
    /*question:*/ "Who is considered the father of modern rocketry?",
    /*answers:*/ ["Konstantin Tsiolkovsky", "Wernher von Braun", "Hans Mark", "Robert Goddard", null],
    /*correctAnswer:*/ 3,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "Robert H. Goddard is credited with building the first liquid-fueled rocket. He was very protective of his work after receiving little support from peers and his ideas being ridiculed by he press. Years after his death in 1945 he became recognized as the father of modern rocketry.",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);

  var question8 = new questionObject(
    /*question:*/ "Mathematician, astronomer, and astrologer best known for his laws of planetary motion:",
    /*answers:*/ ["Johannes Kepler", "Galileo Galilei", "Nicolaus Copernicus", "Isaac Newton", null],
    /*correctAnswer:*/ 0,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "While Ptolemy's planetary system was good enough for most calculations, Mars was a planet that did not seem to perfectly fit the system. Using Tycho Brahe's data, Kepler was able to fit all planets in one perfect system where the Sun is at the center of the Solar System, and the planets follow an elleptical orbit. Kepler would never be satisfied with his own system (still in use today), because he could not believe God had created imperfect orbits (elliptical) rather than perfect ones (circular).",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);

  var question9 = new questionObject(
    /*question:*/ "What is the name of joint NASA-ESA-ASI mission spacecraft to Saturn and its moons?",
    /*answers:*/ ["Juno", "Galileo", "Rosseta", "Cassini", null],
    /*correctAnswer:*/ 3,
    /*userAnswer:*/ 4,
    /*answerExplanation:*/ "Named after astronomer Giovanni Cassini, the Cassini spacecraft was launched on October 15, 1997 and entered orbit around Saturn on July 1, 2004. The mission included a probe named after astronomer Christian Huygens, that landed on Saturn's moon Titan  on January 14, 2005. The mission is expected to end in 2017, by the spacecraft flying into Saturn.",
    /*isCorrect:*/ false,
    /*isTimeUp:*/ false);
    

  return questionsArray = [question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];
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

  var firstColumnDiv = $("<div></div>");
  firstColumnDiv.attr({
    class: "col-md-3 question"
  });

  var questionColumnDiv = $("<div></div>");
  questionColumnDiv.attr({
    class: "col-md-6 question",
    id: "individualQuestionColumn"
  });

  var questionText = $("<h2></h2>");
  questionText.text(currentQuestion.question);

  questionText.appendTo(questionColumnDiv);
  firstColumnDiv.appendTo(questionRowDiv);
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

    var firstColumnDiv = $("<div></div>");
    firstColumnDiv.attr({
      class: "col-md-3",
      id: "firstColumn" + i
    });

    var secondColumnDiv = $("<div></div>");
    secondColumnDiv.attr({
      class: "col-md-3",
      id: "secondColumn" + i
    });
    
    var answersColumnDiv = $("<div></div>");
    answersColumnDiv.attr({
      class: "col-md-6 answers",
      id: "answer" + i
    });
    var answersText = $("<h2></h2>"); 
    // answersText.text(currentQuestion.answers[i]);

    var answerButton = $("<button></button>");
    answerButton.attr({
      class: "answersButtons",
      id: "answerButton" + i
    })
    answerButton.text(currentQuestion.answers[i]);

    // answersText.appendTo(answersColumnDiv);
    answerButton.appendTo(answersColumnDiv);
    firstColumnDiv.appendTo(answersRowDiv);
    answersColumnDiv.appendTo(answersRowDiv);
    secondColumnDiv.appendTo(answersRowDiv);
    answersRowDiv.appendTo(mainAnswersColumn);
    mainAnswersColumn.appendTo("#answersRow");
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
  } else{
    $(".modal-title").text("Wrong answer... The correct answer is:")
  }
  $("#correctAnswer").text(currentQuestion.correctAnswer);
  $("#answerExplanation").text(currentQuestion.answerExplanation);
}

function displaySummaryQuestion(){
  $("#myModal").modal("show");  
  // $("#startGameButton").show();

}

function displayFinalSummary(){
  $("#startGameButton").show();
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
  $("#summaryColumn").remove();
  initialization();
  setQuestionAnswers();
  // startQuestionTimer();
  $("#startGameButton").hide();
});

$(document).on("click", ".answersButtons", function(){
  if (!player.isWaiting && player.isPlaying){
    console.log($(this).attr("id"));
    var selectedAnswer = $(this).attr("id");
    selectedAnswer = parseInt(selectedAnswer.charAt(12));
    userSelection(selectedAnswer);
    setUserSelection();
    console.log(selectedAnswer);
  }
});