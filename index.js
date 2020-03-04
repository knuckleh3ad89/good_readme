var questions = require("inquirer");
var fs = require("fs");
var api = require("./utils/api.js");
var generateMarkdown = require("./utils/generateMarkdown");

questions
    .prompt([
        {
            type: "input",
            message: "User Github name",
            name: "userName"
        },
        {
            type: "input",
            message: "Project Title",
            name: "projectName"
        },
        {
            type: "input",
            message: "Description",
            name: "descrip"
        },
        {
            type: "input",
            message: "Table of Contents",
            name: "tableContents",
            default: "none"
        },
        {
            type: "input",
            message: "What command should be runto install dependencies?",
            name: "install",
            default: "npm i"

        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "usageElm"
        },
        {
            type: "input",
            message: "What command should be run to run test?",
            name: "testElm",
            default: "npm run test"
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "contrib"
        },
        {
            type: "list",
            message: "License",
            name: "licenseElm",
            choices: ["MIT License 2.0", "Apache License 2.0", "none"]
        }

    ])
    .then(function (answers) {

        api.getUser(answers.userName)

            .then(function (response) {

                fs.writeFile('README.md', generateMarkdown({ ...answers, ...response.data }), function (err) {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("sucess");

                });

            });


    });


// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();

