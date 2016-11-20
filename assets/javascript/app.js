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

var question1 = new questionObject("What is the capital of the US", ["Washington DC", "Dallas", "Houston", "Los Angeles"], 0, 4, false, false);

var question2 = new questionObject("What is the capital of Mexico", ["Guadalajara", "Mexico City", "Monterrey", "Ciudad Juarez"], 0, 4, false, false);
