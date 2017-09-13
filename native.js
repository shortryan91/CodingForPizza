
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
  answer: 'URL'
},{
  question:'In What year was HTML first Proposed?',
  choices:['1990', '1985','2000', '1995'],
  answer: '1990'
},{
  question:'what should be the first tag in any HTML document',
  choices:['<head>','<html>','<body>','<title>'],
  answer: '<html>'
}];


var currentQuestion = 0;
var player1 = 0;
var player2 = 0;
var allQuestions = questions.length;


var getElement = function(elem) {
  var element = document.querySelector(elem);
  return element;
}
var getAllElements = function(elements) {
  var elements = document.querySelectorAll(elements);
  return elements;
}

var questionArea = getElement('.question');
var answerBoxes = getAllElements('.answer');
var nextQBtn = getElement('.nextQuestionBtn');




var questionIndex = function() {
  var index = Math.round(Math.random()*(allQuestions -1));
  return index;
}

var loadQuestion = function(randomNumber) {
  var quest = questions[randomNumber];
  questionArea.textContent = quest.question;
}


var loadChoices = function(questionIndex) {
  var options = questions[questionIndex].choices;
    answerBoxes.forEach(function(elem, index){
      elem.textContent = options[index];
    });
    // adds eventlistener to add a class
    answerBoxes.forEach(function(elem){
      elem.addEventListener('click', function(){
        // clear all selected
        answerBoxes.forEach(function(li) {
          li.classList.remove('selected');
        });
        // select one i click
        elem.classList.add('selected');
        // store/update answer
        var storedAnswer = elem.textContent;
      });
    });


}

var nextQuestion = function() {
  var choiceSelected =
}


var rand = questionIndex();
loadQuestion(rand);
loadChoices(rand);
