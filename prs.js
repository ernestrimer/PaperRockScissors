//// Basic Objectives:
//COMPLETE // A user selects rock, paper, or scissors
//COMPLETE // Computer randomly chooses
//COMPLETE // hint: have your choices in an array and randomly choose 
//COMPLETE // Display the user and computers choice on the screen
//COMPLETE // Display the winner

//// Bonus Objectives:
// COMPLETE // Keep track of wins, losses, & ties
// COMPLETE // Use images to make a choice // hint: you can listen for the click event on any HTML element!
// COMPLETE // Be able to start a new game without refreshing
// COMPLETE // Track the percentage of times the user has won/ lost/ tied

// See if you can add ES 6 to your project! 
// Color a win differently than a loss so it is easy to tell if the user won.
  //Use CSS to do this
// hint: add and remove classes: http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript(

  var userScore = 0;
  var compScore = 0;
  var tieScore = 0;
  var plays
  var winPercent = 0;
  var losePercent = 0;
  var tiePercent = 0;


  document.getElementById("rock").onclick = playRock;
  document.getElementById("paper").onclick = playPaper;
  document.getElementById("scissors").onclick = playScissors;
  
  //associated function:
  function playRock() {
    play("rock");
  }
  
  //associated function:
  function playPaper() {
    play("paper");
  }
  
  //associated function:
  function playScissors() {
    play("scissors");
  }

function play(userChoice)
{
  compChoice = getCompChoice();

  //Indicate what the user selected
  document.getElementById("user").innerHTML = "<p>You played " + userChoice + ".</p>";
  //Indicate what the computer selected
  document.getElementById("computer").innerHTML = "<p>The computer played " + compChoice + ".</p>";
  
  //Produce DRY code by indicating a tie
  if (userChoice === compChoice)
  {
    document.getElementById("outcome").innerHTML = "<p>Draw. Play Again!</p>";
    tieScore++;
    percentage();
    increaseScore();
  }
  else if (userChoice === "paper" && compChoice === "rock" || userChoice === "rock" && compChoice === "scissors" || userChoice === "scissors" && compChoice === "paper")
  {
    document.getElementById("outcome").innerHTML = "<p>You Win!</p>";
    userScore++;
    percentage();
    increaseScore();
  }
  else
  {
    document.getElementById("outcome").innerHTML = "<p>You Lose!</p>";
    //Add q point to computer score
    compScore++;
    percentage();
    increaseScore();
  }
}

function increaseScore () {
document.getElementById('userScore').innerHTML = userScore;
document.getElementById('compScore').innerHTML = compScore;
document.getElementById('tieScore').innerHTML = tieScore;
document.getElementById('winPercent').innerHTML = winPercent;
document.getElementById('losePercent').innerHTML = losePercent;
document.getElementById('tiePercent').innerHTML = tiePercent;
}

document.getElementById('startOver').addEventListener('click', startOver);

function startOver () {
  userScore = 0;
  compScore = 0;
  tieScore = 0;
  winPercent = 0;
  losePercent = 0;
  tiePercent = 0;
  increaseScore();
}

function percentage () {
  plays = userScore + compScore + tieScore;
  winPercent = (userScore/plays * 100).toFixed(1) + '%';
  losePercent = (compScore/plays * 100).toFixed(1) + '%';
  tiePercent = (tieScore/plays * 100).toFixed(1) + '%';
}
a
function getCompChoice ()
{
  var prs = ["paper", "rock", "scissors"];
  var comp = prs[Math.floor(Math.random() * prs.length)];
  return comp;
}