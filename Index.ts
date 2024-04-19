#! /usr/bin/env node
import inquirer from "inquirer"

console.log("\n\tWelcome to SahirAhmed - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
   {
       name: "userGuessedNumber",
       type: "number",
       message: "Enter your Guess number(Number Limit from 1 to 10):",
   },
]);
if (answer.userGuessedNumber === randomNumber){
     console.log ("Congratulations! Your guessed number is correct.");
}
else{
    console.log("Sorry, you guess a wrong number");

}