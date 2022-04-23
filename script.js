function computerPlay(plays){
  //array acting as paramater for function


  //print out random string in console
  //return to avoid undefined
  return randomPlay
}

//take out of function for the other function to gain access

//array of options
const plays =["rock", "paper" ,"scissors"]
//random string from array
  const randomPlay = plays[Math.floor(Math.random()*plays.length)]

function playRound(playerSelection, computerSelection){
  if (computerSelection==="scissors" && playerSelection==="rock"){
    return "Congrats, you win! Rock beats Scissors"
  }else if (computerSelection==="paper" && playerSelection==="rock"){
    return "Sorry, you lose! Paper beats Rock"
  }else if (computerSelection===playerSelection){
    return "Oops! That's a tie"
  }

  
}

const playerSelection = "rock";
const computerSelection = computerPlay(plays);
console.log("Computer Selection: " + randomPlay)
console.log("Player Selection: " + playerSelection)
console.log(playRound(playerSelection, computerSelection));