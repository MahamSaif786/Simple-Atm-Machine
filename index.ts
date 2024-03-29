#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance: number = 10000;
let myPin: number = 132036;

async function main() {
  let pinAnswer = await inquirer.prompt([
    {
      name: "pin",
      message: "Enter your pin",
      type: "number",
    }
  ]);

  if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt([
      {
        name: "operation",
        message: "Please select an option",
        type: "list",
        choices: ["Withdraw", "Check balance"],
      }
    ]);

    if (operationAns.operation === "Withdraw") {
      let amountAns = await inquirer.prompt([
        {
          name: "amount",
          message: "Enter the amount",
          type: "number",
        }
      ]);

      if (amountAns.amount > myBalance) {
        console.log("Insufficient funds. Your current balance is: " + myBalance);
      } else {
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
      }
    } else if (operationAns.operation === "Check balance") {
      console.log("Your current balance is: " + myBalance);
    }
  } else {
    console.log("Incorrect pin code");
  }
}

main();
