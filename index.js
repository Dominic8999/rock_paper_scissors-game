let tools = ["rock", "paper", "scissors"]

let random_number = Math.floor(Math.random() * 3)
let computer_choice = tools[random_number]

console.log(random_number)
console.log(computer_choice)

let player_choice = prompt("Choose your tool: rock, paper or scissors.")

function game(player_choice){
    let message = undefined
    if (computer_choice > player_choice){
        message = "The computer has won!"
        return message
    }
    if (computer_choice < player_choice){
        message = "You've won the game!"
    }
    else{
        message = "draw"
        return message
    }
    console.log(message)
}

game(player_choice)