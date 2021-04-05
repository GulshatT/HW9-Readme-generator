const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = (answers) =>

`## Table of Contents:
    *[Description](#Description)
    *[Usage](#Usage)
    *[Test](#Test)
    *[License](#License)
    *[GitHub](#GitHub)
    *[Email](#Email)

    #Title:
    # ${answers.title}

    ## Description:
    ${answers.description}

    ## Usage:
    ${answers.usage}

    ## Test:
    ${answers.test}

    ## License:
    ${answers.license}

    ## GitHub
    Please visit my ${answers.github} to see my work.

    ## Email
    My Email is ${answers.email}`

inquirer.prompt([
    {
        type: "input",
        message: "Please enter your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What is the deployed link of your project? (Please put https:// in it)",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter License name.",
        name: "LicenseName",
        choice: ["MIT", "Apache", "GNU GPLv3", "ISC"]
    },
    {
        type: "input",
        message: "Please enter Table of Contents",
        name: "content"
    },
    {
        type: "input", 
        message: "Tests",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
]).then(function(res) {
    console.log(res)

}).then((answers) => {
    console.log(answers);

    const newREADMEfile = generateMarkdown(answers);
    // TODO: Create a function to write README file
    function generateMarkdown(fileName, data) {
    fs.writeFile("README.md", newREADMEfile, (err) =>
    err? console.log(err) : console.log("File successfully created!")
    );
    }
})


    // const readme = (answers) =>
    

    // //fs.writeFile(fileName, readme, (err) =>
    // //err? console.error(err) : console.log(`Success!`))

    // TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();