console.log('connecting... ');

var questions = [{
  question:'The downCase method belongs to which language?',
  choices:['Ruby','Javascript','Python','C++'],
  answer: 'Ruby'
},{
  question:'In Javascript how would you turn the word hello into an array of strings? ',
  choices: ['split()','pop()','slice()','push()'],
  answer: 'split()'
}];


// gobals
var currentPlayer = player1
// var player1 = 0;
// var player2 = 0;
var winningScore = 8;



var displayQuestion = function() {

}


var correctAnswerGiven = function(playerAnswer) {
  if(currentPlayerAnswer === questions[0].answer) {

  }
}


var switchPlayer = function() {
  if(player1 === currentPlayer) {
    currentPlayer = player2;
  } else if (currentPlayer === player1){
    currentPlayer = player1;
  }
};


var Winner = function() {
  if (player1 === winningScore) {
    console.log('player1 winner');
    // display the winner screen for player 1
  } else if (player2 === winningScore) {
    console.log('player2 winner');
    // display the winner screen for player 2
  }
}


//presentation
var asking = questions[0].question;
var choices = questions[0].choices;

var questionBox = document.querySelector('.question');
var newQuestion = questionBox.innerHTML = asking;




var answerBoxes = document.querySelectorAll('.answer');
// pushes the array of chioces into the li's
answerBoxes.forEach(function(elem, index){
  elem.textContent = choices[index];
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



var seconds;
  var temp;

  function countdown() {
    seconds = document.querySelector('#countdown').innerHTML;
    seconds = parseInt(seconds, 10);

    if (seconds == 0) {
      temp = document.querySelector('#countdown');
      temp.innerHTML = "0"
        // get to next question

      return;
    }
    seconds--;
    temp = document.querySelector('#countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  }

  countdown();
