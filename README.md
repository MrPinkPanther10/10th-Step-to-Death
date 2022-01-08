# 10th-Step-to-Death

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)
    
## Description 
This project is created to generate a high-quality README file by asking user a series of question thru Node.js
## Table of Contents
* [User Story](#user story)
* [Acceptance Criteria](#acceptance criteria)
* [Installation](#installation)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## User Story
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

## Installation 
The user should clone the repo, must have Node.js, Inquirer, and Jest installed.

## Usage 
1. In your terminal, test the script with the command npm run test
2. After you pass the test, enter node index.js in the terminal
3. Enter the required details when prompted.
4. Add additional members by selecting a role.
5. After all members have been added, choose the "Create the Page" option.
6. The created page will be generated in the dist/ folder




## License 
This project is license under MIT

## Contributing 
N/A

## Tests
node index.js
    
## Questions
If you have any questions about this projects, please contact me directly at chumilyrockz@yahoo.com. You can view more of my projects at https://github.com/undefined.
  
