
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
  question:'what should be the first tag in any HTML document?',
  choices:['<head>','<html>','<body>','<title>'],
  answer: '<html>'
}, {
  question:'Which of the following is not a browser ? ',
  choices:['Microsofts Bing','Netscape Navigator','Mozilla Firefox','Opera'],
  answer:'Microsofts Bing',
},{
  question:'Which type of error is caused when code is executed but there are undesired results?',
  choices:['Runtime error','Browser error','Syntax error','Logic error'],
  answer:'Logic error'
},{
  question: 'which of these Math. methods returns the value rounded up to the nearest integer?',
  choices:['Math.floor()','Math.random()','Math.ceil()','Math.round()'],
  answer:'Math.ceil()'
},{
  question:'which of these is not a reserved word in Javascript?',
  choices: ['debugger','null','break',
'broke'],
  answer: 'broke'
},{
  question:'pick the html tag that uses .value instead of .textContent when getting the text in the DOM?',
  choices:['<input>','<h1>','<p>','<form>'],
  answer:'<input>'
},{
  question:'which of these is not a click event?',
  choices:['onmouseover','onmouseout','onclick','onmouseleft'],
  answer:'onmouseleft'
},{
  question:'in CSS which of these dont belong',
  choices:['block','grid','inline','list'],
  answer:'list'
},{
  question:'which of these is not a way to collect an item from the DOM?',
  choices: ['getElementById','getElementsById','getElementsByTagName','getElementsByClassName'],
  answer:'getElementsById'
},{
  question:'which of these characters are not allowed to be used to start a var name in Javascript',
  choices:['_','$','1','#'],
  answer:'#'
},{
  question:'nearly everything in Ruby is condsidered a what?',
  choices:['variable','object','function','proc'],
  answer:'object'
},{
  question:'because Ruby is an interpreted language, it means that a source code complied and executed at what?',
  choices:['Runtime','After Lunch','Before','later'],
  answer:'Runtime'
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
var winningScore = 8;
// capture all the pages
var welcomePage = getElement('.welcomePage');
var gameRulesPage = getElement('.gameRulesPage');
var contactPage = getElement('.contactpage');
var loginPage= getElement('.playerInfoPage');
var gamePage = getElement('#gamePage');
var winnerPage = getElement('.winnerPage');
// capturing all buttons
var enterGameBtn = getElement('.sumbitBtn');
var loginBtn = getElement('.loginBtn');
var homeBtn = getElement('#homeBtn');
var gameRulesBtn = getElement('#gameRulesBtn');
var contactBtn = getElement('#contactBtn');
var nextQBtn = getElement('.nextQuestionBtn');
var resetBtn = getElement('.resetBtn');
var submitNamesBtn = getElement('#submitPlayerBtn');
// text area elements
var questionArea = getElement('.question');
var answerBoxes = getAllElements('.answer');
var winnersName = getElement('#winnerPlayer');
var gameHeading = getElement('.gamePageHeading');
// grabs the values of the players id's
var player1Name = getElement('#player1').textContent;
var player2Name = getElement('#player2').textContent;
// grabs the 0 in each players box for scoring
var player1Count = getElement('#player1Score');
var player2Count = getElement('#player2Score');
// login in page inputs
var newPlayer1name = getElement('#newPlayer1');
var newPlayer2name = getElement('#newPlayer2');

submitNamesBtn.addEventListener('click', function(){
first = newPlayer1name.value
player1Name.textContent = first

});



var switchPlayer = function() {
  if(player1Name === currentPlayer) {
    currentPlayer = player2Name;
  } else if (currentPlayer === player2Name){
    currentPlayer = player1Name;
  }
  return currentPlayer;
};

// show whos turn on game screen


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
    gameHeading.textContent = currentPlayer
    captureQuestions(questionIndex);
    questionIndex = genRand();
    loadQuestion(questionIndex);
    loadChoices(questionIndex);
  } else if (currentAnswer !== choiceSelected){
    switchPlayer();
    gameHeading.textContent = currentPlayer
  }
  return questionIndex;
}


var winner = function() {
  if (player1Score === winningScore) {
    // display the winner screen for player 1
    gamePage.style.display = 'none';
    winnerPage.style.display = 'block';
    winnersName.textContent = currentPlayer;
  } else if (player2Score === winningScore) {
    // display the winner screen for player 2
    gamePage.style.display = 'none';
    winnerPage.style.display = 'block';
    winnersName.textContent = currentPlayer;
  }
}


var rand = genRand();
// addEventListener for next button
nextQBtn.addEventListener('click', function(){
// pass nextQuestion inside that function

  rand = nextQuestion(rand)
});

// here to load the first question in the game
loadQuestion(rand);
loadChoices(rand);

// presentation
// all pages captured
var welcomePage = getElement('.welcomePage');
var gameRulesPage = getElement('.gameRulesPage');
var contactPage = getElement('.contactpage');
var loginPage= getElement('.playerInfoPage');

var enterGameBtn = getElement('.sumbitBtn');

enterGameBtn.addEventListener('click', function(){
  welcomePage.style.display = 'none';
  gamePage.style.display = 'block';
});

homeBtn.addEventListener('click', function(){
  welcomePage.style.display = "block";
  gamePage.style.display = 'none';
  contactPage.style.display = 'none';
  gameRulesPage.style.display = 'none';
  winnerPage.style.display = 'none';
  loginPage.style.display = 'none';
});

contactBtn.addEventListener('click', function(){
  contactPage.style.display = 'block';
  welcomePage.style.display = "none";
  gamePage.style.display = 'none';
  gameRulesPage.style.display = 'none';
  winnerPage.style.display = 'none';
  loginPage.style.display = "none";
});

gameRulesBtn.addEventListener('click', function(){
  gameRulesPage.style.display = 'block';
  gamePage.style.display = 'none';
  welcomePage.style.display = "none";
  contactPage.style.display = 'none';
  winnerPage.style.display = 'none';
  loginPage.style.display = 'none';
});

loginBtn.addEventListener('click', function(){
  loginPage.style.display = 'block';
  gameRulesPage.style.display = 'none';
  gamePage.style.display = 'none';
  welcomePage.style.display = "none";
  contactPage.style.display = 'none';
  winnerPage.style.display = 'none';
});


resetBtn.addEventListener('click', function(){
  window.location.reload();
})
