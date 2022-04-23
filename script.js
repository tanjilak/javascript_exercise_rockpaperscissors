function computerPlay(plays){
  //array acting as paramater for function
  
  //print out random string in console
  console.log("Computer Selection: " + randomPlay)
}

//take out of function for the other function to gain access

//array of options
let plays =["rock", "paper" ,"scissors"]

//random string from array
let randomPlay = plays[Math.floor(Math.random()*plays.length)]

function playRound(playerSelection, computerSelection){
  if (computerSelection == "rock" && playerSelection == "rock"){
    return "Oop"
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));