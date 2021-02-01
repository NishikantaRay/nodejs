// const {add,sub,mult}=require("./day4");
// console.log(add(5,5));

const chalk = require("chalk");
var validator = require("email-validator");
console.log(chalk.green.inverse('Hello world!'));
console.log(chalk.red.bgBlackBright('Hello world!'));
console.log(chalk.yellow('Hello world!'));
console.log(chalk.bgCyan('Hello world!'));
console.log(chalk.bgRed('Hello world!'));

const check=validator.validate("test@email.com");

console.log(check? chalk.green.inverse(check):chalk.red.inverse(check));
console.log("gjfdshjfs");