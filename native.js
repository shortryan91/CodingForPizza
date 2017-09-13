
var questions = [{
  question:'The downCase method belongs to which language?',
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
var currentPlayer = player1;
var player1 = 0;
var player2 = 0;
var winningScore = 3;



var questionArea = getElement('.question');
var answerBoxes = getAllElements('.answer');
var nextQBtn = getElement('.nextQuestionBtn');




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
    captureQuestions(questionIndex);
    questionIndex = genRand();
    loadQuestion(questionIndex);
    loadChoices(questionIndex);
  } else if (currentAnswer !== choiceSelected){
    console.log('nope');
  }
  return questionIndex;
}


var Winner = function() {
  if (player1 === winningScore) {
    console.log('player1 winner');
    // display the winner screen for player 1
  } else if (player2 === winningScore) {
    console.log('player2 winner');
    // display the winner screen for player 2
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
