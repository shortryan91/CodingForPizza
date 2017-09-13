
var questions = [{
  question:'The downcase method belongs to which language?',
  choices:['Ruby','Javascript','Python','C++'],
  answer: 'Ruby'
},{
  question:'In Javascript how would you turn the word hello into an array of strings? ',
  choices: ['split()','pop()','slice()','push()'],
  answer: 'split()'
},{
  question:"what is DT's favourite color?",
  choices:['black','mistyRose','darkOliveGreen', 'crimson'],
  answer:'mistyRose'
},{
  question:'web pages are bulit using ?',
  choices:['FTP', 'HTTP', 'HTML', 'URL'],
  answer: 'HTML'
},{
  question:'In What year was HTML first Proposed?',
  choices:['1990', '1985','2000', '1995'],
  answer: '1990'
},{
  question:'what should be the first tag in any HTML document',
  choices:['<head>','<html>','<body>','<title>'],
  answer: '<html>'
}];

var getElement = function(elem) {
  var element = document.querySelector(elem);
  return element;
}
var getAllElements = function(elements) {
  var elements = document.querySelectorAll(elements);
  return elements;
}

var currentQuestion = 0;
var currentPlayer = 'player 1 ';
var player1Score = 0;
var player2Score = 0;
var winningScore = 3;


var gamePage = getElement('#gamePage');
var winnerPage = getElement('.winnerPage');
var questionArea = getElement('.question');
var answerBoxes = getAllElements('.answer');
var nextQBtn = getElement('.nextQuestionBtn');
// grabs the values of the players id's
var player1Name = getElement('#player1').textContent;
var player2Name = getElement('#player2').textContent;
// grabs the 0 in each players box for scoring
var player1Count = getElement('#player1Score');
var player2Count = getElement('#player2Score');




var switchPlayer = function() {
  if(player1Name === currentPlayer) {
    currentPlayer = player2Name;
    // console.log('player 2')
  } else if (currentPlayer === player2Name){
    currentPlayer = player1Name;
    // console.log('player 1')
  }
  return currentPlayer;
};


var gameScores = function() {
  if (currentPlayer === player1Name){
  player1Score ++;
  player1Count.textContent = player1Score;
  } else if (currentPlayer === player2Name) {
  player2Score ++;
  player2Count.textContent = player2Score;
  }
}

var genRand = function() {
  var allQuestions = questions.length;
  var index = Math.round(Math.random()*(allQuestions -1));
  return index;
}

var captureQuestions = function(randomNumber) {
  var usedQuestions = [];
  // splicing out the object from the questions array.
  var questionObject = questions.splice(randomNumber,1)
  // push the item item to the new array.
    usedQuestions.push(questionObject);
}

var loadQuestion = function(randomNumber) {
  var quest = questions[randomNumber];
  questionArea.textContent = quest.question;
}


var loadChoices = function(questionIndex) {
  var options = questions[questionIndex].choices;
    answerBoxes.forEach(function(elem, index){
      elem.textContent = options[index];
      elem.addEventListener('click', function(){
        // clear all selected
        answerBoxes.forEach(function(li) {
          li.classList.remove('selected');
        });
        // select one i click
        elem.classList.add('selected');
      });
    });
}



var nextQuestion = function(questionIndex) {
  // find the current selected answer using the classList
  var choiceSelected = getElement('.selected').textContent;
  var currentAnswer = questions[questionIndex].answer
  if(currentAnswer === choiceSelected) {

    gameScores();
    winner();
    switchPlayer();
    captureQuestions(questionIndex);
    questionIndex = genRand();
    loadQuestion(questionIndex);
    loadChoices(questionIndex);
  } else if (currentAnswer !== choiceSelected){
    switchPlayer();

  }
  return questionIndex;
}


var winner = function() {
  if (player1Score === winningScore) {
    // display the winner screen for player 1
    gamePage.style.display = 'none';
    winnerPage.style.display = 'block';
  } else if (player2Score === winningScore) {
    // display the winner screen for player 2
    gamePage.style.display = 'none';
    winnerPage.style.display = 'block';
  }
}


var rand = genRand();
// addEventListener for next button
nextQBtn.addEventListener('click', function(){
// pass nextQuestion inside that function

  rand = nextQuestion(rand)

});

loadQuestion(rand);
loadChoices(rand);
