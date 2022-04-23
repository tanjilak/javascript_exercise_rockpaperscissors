let player=0;
let computer=0;

function computerPlay(){
  //array acting as paramater for function

  //print out random string in console
  //return to avoid undefined
  return randomPlay
}

//take out of function for the other function to gain access

//array of options
const plays =["rock", "paper" ,"scissor"]
//random string from array
const randomPlay = plays[Math.floor(Math.random()*plays.length)]



function playRound(playerSelection, computerSelection){
  //game results
  if (computerSelection==="scissor" && playerSelection==="rock"
      || computerSelection==="paper" && playerSelection==="scissor" 
      || computerSelection==="rock" && playerSelection==="paper"){
    
    player++
    return "Congrats, you win!"
    
  }else if (computerSelection==="paper" && playerSelection==="rock" 
            || computerSelection==="scissor" && playerSelection==="paper" 
            || computerSelection==="rock" && playerSelection==="scissor"){
    
    computer++
    return "Sorry, you lose!"
    
  }else if (computerSelection===playerSelection){
    return "Oops! That's a tie"
  }
  }



function game(){
  for (let i=0; i<5; i++){
    
  const playerSelection = prompt("Pick rock, paper, or scissor")
  const computerSelection = computerPlay(plays);
  
  console.log("Computer Selection: " + randomPlay)
  console.log("Player Selection: " + playerSelection)
  
  console.log(playRound(playerSelection, computerSelection))
  console.log("---------------------")
  }

  if (player === computer){
    return "Tie!"
  }else if (player < computer){
    return "You Lose!"
  }else if (player > computer){
    return "You Win!"
  }
}

console.log(game())