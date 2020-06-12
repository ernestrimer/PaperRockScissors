// Basic Objectives:
// A user selects rock, paper, or scissors
print image of a rock, paper and scissors.  User would select one.
The selection is stored in memory.a

// Computer randomly chooses
// hint: have your choices in an array and randomly choose 
Array includes paper, rock or scissors.a
Randomly select an option from that Array.
FANCY: show the image.

// Display the user and computers choice on the screen
// Display the winner

  // Bonus Objectives:
  // Keep track of wins, losses, & ties  
  user win variable = 0
  computer win variable = 0

Score Board: 0 - 0


//Working logic
//Will need to change console.log to return in winLose when using DOM with html
//Look in slack from Harlan, about how to make the code more DRY

var userChoice = prompt("Choose rock, paper, scissors")

var prs = ["Paper", "Rock", "Scissors"]

var comp = prs[Math.floor(Math.random() * prs.length)];

console.log(userChoice)
console.log(comp)


function winLose()
{
  if (userChoice === "Paper")
  {
    if(comp == "Paper") {
      console.log("It's a tie");
    }
    else if (comp === "Rock") {
      console.log("You Win!");
      //Add 1 point to user win tally
    }
    else {
      console.log("You lose!");
      //Add 1 point to computer win tally
    }  
  }

   else if (userChoice == "Rock") 
  {
    if(comp == "Rock") {
      console.log("It's a tie");
    }
    else if (comp == "Scissors") {
      console.log("You Win!");
      //Add 1 point to user win tally
    }
    else {
      console.log("You lose!");
      //Add 1 point to computer win tally
    }  
  }
  
  else if (userChoice == "Scissors") 
  {
    if (comp == "Scissors") {
      console.log("It's a tie");
    }
    else if (comp == "Paper") {
      console.log("You Win!");
      //Add 1 point to user win tally
    }
    else {
      console.log("You lose!");
      //Add 1 point to computer win tally
    }  
  }
  
  else {
    console.log("Wrong Input");
  }
}

winLose()

// var userChoice = prompt("Choose Rock, Paper, Scissors")

// var prs = ['Paper', 'Rock', 'Scissors']
// var comp = prs[Math.floor(Math.random() * prs.length)];
// console.log(comp)

// function winLose(a, b)
// {
//   if (userChoice == "Paper")
//   {
//     if(comp == "Paper") {
//       return "It's a tie";
//     }
//     else if (comp == "Rock") {
//       return "You Win!";
//       //Add 1 point to user win tally
//     }
//     else {
//       return "You lose!";
//       //Add 1 point to computer win tally
//     }  
//   }

//   else if (userChoice == "Rock") 
//   {
//     if(comp == "Rock") {
//       return "It's a tie";
//     }
//     else if (comp == "Scissors") {
//       return "You Win!";
//       //Add 1 point to user win tally
//     }
//     else {
//       return "You lose!";
//       //Add 1 point to computer win tally
//     }  
//   }
  
//   else if (userChoice == "Scissors") 
//   {
//     if (comp == "Scissors") {
//       return "It's a tie";
//     }
//     else if (comp == "Paper") {
//       return "You Win!";
//       //Add 1 point to user win tally
//     }
//     else {
//       return "You lose!";
//       //Add 1 point to computer win tally
//     }  
//   }
  
//   else {
//     return "Wrong Input"
//   }
// }

// winLose()


// remember this is only going to be until the user refreshes the browser. We don't have anything fetching from or posting to a database yet!
// Use images to make a choice
// hint: you can listen for the click event on any HTML element!
// Be able to start a new game without refreshing
// Track the percentage of times the user has won/ lost/ tied

// See if you can add ES 6 to your project!
// Color a win differently than a loss so it is easy to tell if the user won.
// hint: add and remove classes: http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript