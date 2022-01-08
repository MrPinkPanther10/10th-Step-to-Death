// required modules 
const fs = require('fs');
const inquirer = require('inquirer');
const { breakList } = require('prelude-ls');
const util = require('util');

// Function to choose what type of employee to add
function createTeam() {
    inquirer.prompt([{
        type: "list",
        name: "addEmployeePrompt",
        message: "What type of employee would you like to add to your Dream Team?",
        choices: ["Manager", "Engineer", "Intern", "Cancel"]
    }]).then(function(userInput) {
        switch (userInput.addEmployeePrompt) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;

            default:
        }
    })
}

// Function for Manager Option
function addManager() {
    inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "What is the Manager's Name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the ID number!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam()
    });
}