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
            name: "tableContents"
        },
        {
            type: "input",
            message: "Insallation",
            name: "install"

        },
        {
            type: "input",
            message: "Usage",
            name: "usageElm"
        },
        {
            type: "input",
            message: "Questions",
            name: "questionElm"
        },
        {
            type: "input",
            message: "Tests",
            name: "testElm"
        },
        {
            type: "input",
            message: "Contributing",
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

         api.getUser(answers.userName).then(function(response) {
        
            fs.writeFile('README.md', generateMarkdown({...answers, ...response.data}), function (err) {
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

