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

// Function for Engineer Option
function addEngineer() {
    inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "What is the engineer's Name?",
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
            name: "engineerId",
            message: "What is the engineer's employee ID number?",
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
            name: "engineerEmail",
            message: "What is the engineer's email address?",
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
            name: "engineerOfficeNumber",
            message: "What is the engineer's office number?",
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
        const engineer = new Manager(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerOfficeNumber);
        teamArray.push(engineer);
        createTeam()
    });
}

// Function for Intern Option
function addIntern() {
    inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "What is the intern's Name?",
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
            name: "internId",
            message: "What is the intern's employee ID number?",
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
            name: "internEmail",
            message: "What is the intern's email address?",
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
            name: "internOfficeNumber",
            message: "What is the intern's office number?",
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
        const intern = new Manager(answers.internName, answers.internId, answers.internEmail, answers.internOfficeNumber);
        teamArray.push(intern);
        createTeam()
    });
}