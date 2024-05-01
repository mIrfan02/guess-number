#!/usr/bin/env node
import inquirer from "inquirer";

async function guessTheNumber() {
    let playAgain = true;

    while (playAgain) {
        let guess = await inquirer.prompt([
            {
                name: "guess",
                message: "Guess a number between 1 and 10:",
                type: "input"
            }
        ]);

        let randomnumber = Math.floor(Math.random() * 10) + 1;

        let guessed = parseInt(guess.guess);

        if (guessed === randomnumber) {
            console.log("Your guessed number is right: " + randomnumber);
        } else {
            console.log("Your guessed number is wrong. It was: " + randomnumber);
        }

        const { again } = await inquirer.prompt({
            type: "confirm",
            name: "again",
            message: "Do you want to play again?",
        });

        playAgain = again;
    }
}

guessTheNumber();
