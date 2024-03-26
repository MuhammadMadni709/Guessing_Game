#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 6",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number");
} else {
    console.log("You Guessed Wrong Number");
}