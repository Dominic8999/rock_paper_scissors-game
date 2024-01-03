const btnEl = document.querySelector("#btnEl");

let tools = ["rock", "paper", "scissors"];

function game(player_choice) {
    let random_number = Math.floor(Math.random() * 3);
    let computer_choice = tools[random_number];

    function rules() {
        if (computer_choice == "rock" && player_choice == "scissors" || computer_choice == "paper" && player_choice == "rock"
            || computer_choice == "scissors" && player_choice == "paper") {
            return `The computer has won! The computer used ${computer_choice}, and you used ${player_choice}`;
        }
        if (player_choice == "rock" && computer_choice == "scissors" || player_choice == "paper" && computer_choice == "rock"
            || player_choice == "scissors" && computer_choice == "paper") {
            return `You've won the game! You've used ${player_choice}, and the computer used ${computer_choice}.`;
        }
        if (computer_choice == player_choice) {
            return `It's a draw! The computer used ${computer_choice}, and you used ${player_choice} at the same time!`;
        }
        throw new Error("Invalid game outcome");
    }

    try {
        let information = rules();
        alert(information);
        console.log(information);
    } catch (error) {
        console.error(error);
    }
}

function check() {
    let player_choice = prompt("Choose your tool: rock, paper, or scissors.");
    try {
        if (!player_choice) {
            let warning = alert("You didn't choose any tool :(");
            console.log("The user didn't type anything :(");
            return warning;
        } else {
            game(player_choice);
        }
    } catch (e) {
        console.info(`"${e}" error is supposed to happen if the end user typed one of the tools correctly.`);
    }
}

btnEl.addEventListener("click", check);
