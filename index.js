let tools = ["rock", "paper", "scissors"]

let random_number = Math.floor(Math.random() * 3)
let computer_choice = tools[random_number]

console.log(random_number)
console.log(computer_choice)

let player_choice = prompt("Choose your tool: rock, paper or scissors.")


function game(){
    let message = console.info("deafult message")
    if (computer_choice == "rock" && player_choice == "scissors" || computer_choice == "paper" && player_choice == "rock"
    || computer_choice == "scissors" && player_choice == "paper"){
        message = alert("The computer has won!")
        return message
    }
    if (player_choice == "rock" && computer_choice == "scissors" || player_choice == "paper" && computer_choice == "rock"
    || player_choice == "scissors" && computer_choice == "paper"){
        message = alert("You've won the game!")
    }
    if (computer_choice == player_choice){
        message = alert("draw")
        return message
    }
    alert(message)
    console.log(message)        
}
function check(){
    if (player_choice == ""){
        let warning = alert("You typed no tool whatsoever :(")
        return warning
    }
    else{
        try{
            game()
        }
        catch(e){
            let error = console.error(`${e} is supposed to happened if end user typed one of the tool correctly`)
            return error
        }
    }
    console.warn(warning)
    alert(warning)
}
check()
game()