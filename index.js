const btnEl = document.querySelector("#btnEl")

let tools = ["rock", "paper", "scissors"]

let random_number = Math.floor(Math.random() * 3)
let computer_choice = tools[random_number]

console.log(random_number)
console.log(computer_choice)

let player_choice = prompt("Choose your tool: rock, paper or scissors.")

function game(){
    if (computer_choice == "rock" && player_choice == "scissors" || computer_choice == "paper" && player_choice == "rock"
    || computer_choice == "scissors" && player_choice == "paper"){
        message = `The computer has won! The computer used ${computer_choice}, and you used ${player_choice}`
        alert(message)
        console.log(message)
        return message
    }
    if (player_choice == "rock" && computer_choice == "scissors" || player_choice == "paper" && computer_choice == "rock"
    || player_choice == "scissors" && computer_choice == "paper"){
        message = `You've won the game! You've used ${player_choice}, and the computer used ${computer_choice}.`
        alert(message)
        console.log(message)
        return message
    }
    if (computer_choice == player_choice){
        message = `It's a draw! The computer used ${computer_choice}, and you used ${player_choice} at the same time!`
        alert(message)
        console.log(message)
        return message
    }
}

function check(){
    try{
        if (player_choice == ""){
            let warning = alert("You typed no tool whatsoever :(")
            console.log("The user typed no words at all :(")
            return warning
        }
        else{
            game()
        }
    }
    catch(e){
        console.info(`"${e}" error is supposed to happened if end user typed one of the tool correctly`)
    }
}

btnEl.addEventListener("click", check())