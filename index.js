var questions = require ("inquirer");
var fs = require("fs");
var api = require ("./utils/api.js");


 questions 
    .prompt([
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
            message: "License",
            name: "licenseElm"
        },
        {
            type: "input",
            message: "Badges",
            name: "badgesElm"
        },
        {
            type: "input",
            message: "Contributing",
            name: "contrib"
        },
        {
            type: "input",
            message: "Tests",
            name: "testElm"
        },
        {
            type: "input",
            message: "Questions",
            name: "questionElm"
        },
        {
            type: "input",
            message: "User GitHub profile picutre",
            name: "userPicture" 
        },
        {
            type: "input",
            message: "User Github email",
            name: "userEmail"
        }
        
    ])


    .then(function(response){
        var fName = response.projectName.toLowerCase().split(" ").join('') + ".json";
        fs.writeFile(fName, JSON.stringify(fName, null, "\t"), function(err){
            if(err){
               return console.log(err); 
            }
            console.log("sucess");
            
        });

        
    });
   

// function writeToFile(fileName, data) {
// }

// function init() {

// }

init();
