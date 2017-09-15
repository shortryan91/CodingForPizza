

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
var backToGameBtn = getElement('.backToGameBtn');
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
var enteredName1 = getElement('.name1');
var enteredName2 = getElement('.name2')


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
  if (currentPlayer === player1Name) {
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
  answerBoxes.forEach(function(elem, index) {
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

enterGameBtn.addEventListener('click', function() {
  welcomePage.style.display = 'none';
  gamePage.style.display = 'block';
});

homeBtn.addEventListener('click', function() {
  welcomePage.style.display = "block";
  gamePage.style.display = 'none';
  contactPage.style.display = 'none';
  gameRulesPage.style.display = 'none';
  winnerPage.style.display = 'none';
  loginPage.style.display = 'none';
});

contactBtn.addEventListener('click', function() {
  contactPage.style.display = 'block';
  welcomePage.style.display = "none";
  gamePage.style.display = 'none';
  gameRulesPage.style.display = 'none';
  winnerPage.style.display = 'none';
  loginPage.style.display = "none";
});

gameRulesBtn.addEventListener('click', function() {
  gameRulesPage.style.display = 'block';
  gamePage.style.display = 'none';
  welcomePage.style.display = "none";
  contactPage.style.display = 'none';
  winnerPage.style.display = 'none';
  loginPage.style.display = 'none';
});

loginBtn.addEventListener('click', function() {
  loginPage.style.display = 'block';
  gameRulesPage.style.display = 'none';
  gamePage.style.display = 'none';
  welcomePage.style.display = "none";
  contactPage.style.display = 'none';
  winnerPage.style.display = 'none';
});


resetBtn.addEventListener('click', function() {
  window.location.reload();
})

backToGameBtn.addEventListener('click', function() {
  gamePage.style.display = 'block';
  welcomePage.style.display = "none";
  contactPage.style.display = 'none';
  gameRulesPage.style.display = 'none';
  winnerPage.style.display = 'none';
  loginPage.style.display = 'none';
})

submitNamesBtn.addEventListener('click', function() {
  firstPlayer = newPlayer1name.value
  enteredName1.textContent = firstPlayer;
  secondPlayer = newPlayer2name.value
  enteredName2.textContent  = secondPlayer;
  loginPage.style.display = 'none';
  gamePage.style.display = 'block';
});
