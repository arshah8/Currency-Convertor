#!/usr/bin/env
import inquirer from "inquirer";
let currency  : any ={
    USD : { value: 1, symbol: '$' },
    PKR: { value: 278.0, symbol: '₨' },
    INR: { value: 83.2, symbol: '₹' },
    RIYAL: { value: 3.64, symbol: '﷼' },
    EURO: { value: 0.92, symbol: '€' },
    YUAN: { value: 7.23, symbol: '¥' },
    POUND: { value: 0.79, symbol: '£' },
};
let menu = await inquirer.prompt([
    {
        name: 'from',
        message: "Convert from",
        type: "list",
        choices: ["USD", "PKR", "INR", "EURO", "YUAN", "RIYAL", "POUND"],
    },
    {
        name: 'to',
        mesaage: "Convert to",
        type: "list",
        choices: ["USD", "PKR", "INR", "EURO", "YUAN", "RIYAL", "POUND"],
    },
    {
        name: 'Amount',
        type: "any",
        message: "Enter Amount:",
    },
]);
let fromAmount = currency[menu.from].value;
let toAmount = currency[menu.to].value;
let quantity = (menu.Amount);
let baseAmount = quantity / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted Amount is ${parseFloat(convertedAmount.toFixed(2))} ${currency[menu.to].symbol}`);
