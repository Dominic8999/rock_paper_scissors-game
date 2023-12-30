let tools = ["rock", "paper", "scissors"]

let random_number = Math.floor(Math.random() * 3)
let computer_choice = tools[random_number]

console.log(random_number)
console.log(computer_choice)

let player_choice = prompt("Choose your tool: rock, paper or scissors.")

// function check(player_choice){
//     // if (player_choice === ""){
//     //         return alert("please write some tool")
//     // }
//     // // if (player_choice != "rock") {
//     // //     choice = player_choice
//     // //     return choice && alert("please write it correctly!") 
//     // // }
    // else{
        function game(){
            let message = undefined
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
            console.log(message)
        // }
    }
// }
game()