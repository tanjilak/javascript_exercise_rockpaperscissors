function computerPlay(){
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
  //game results
  if (computerSelection==="scissors" && playerSelection==="rock" || computerSelection==="paper" && playerSelection==="scissors" || computerSelection==="rock" && playerSelection==="paper"){
    return "Congrats, you win!"
  }else if (computerSelection==="paper" && playerSelection==="rock" || computerSelection==="scissors" && playerSelection==="paper" || computerSelection==="rock" && playerSelection==="scissors"){
    return "Sorry, you lose!"
  }else if (computerSelection===playerSelection){
    return "Oops! That's a tie"
  }
  }



function game(){
  for (let i=0; i<5; i++){
    
  const playerSelection = prompt("Pick rock, paper, or scissors")
  const computerSelection = computerPlay(plays);
  
  console.log("Computer Selection: " + randomPlay)
  console.log("Player Selection: " + playerSelection)
  
  console.log(playRound(playerSelection, computerSelection))
  console.log("---------------------")
    

  }
  return 
}

console.log(game())