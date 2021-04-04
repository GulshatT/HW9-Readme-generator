// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//const markdown = require("markdown");

// TODO: Create an array of questions for user input
//const questions = [];
inquirer.prompt([
            {
                type: "input",
                message: "Please enter your project title?",
                name: "title"
            },
            {
                type: "input",
                message: "Please provide a description of your project",
                name: "description"
            },
            {
                type: "input",
                message: "What is the deployed link of your project?",
                name: "usage"
            },
            {
                type: "input",
                message:"Please enter License name",
                name: "LicenseName",
                choice: ["MIT", "Apache", "GNU GPLv3", "ISC"]
            },
            {
                type: "input",
                message: "Please enter Table of Contents",
                name: "contents"
            },
            {
                type: "input",
                message: "Tests",
                name: "tests"
            },
            {
                type: "input",
                message: "What is your GitHub username",
                name: "username"
            },
            {
                type:"input",
                message: "What is your email address?",
                name: "email"
            }
        ]).then(function(res) {
            console.log(res);            
        })
    


// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
//const writeFileAsync = util.promisify(fs.writeFile);
//userPromts();
//async function userPrompts() {
    //try {
        //const userInput = await inquirer.prompt([
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();