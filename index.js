// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the Description?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the Installition instructions?',
        name: 'installation',
      },
      {
          type: 'input',
          message: 'What is the usage of this application?',
          name: 'usage',
        },
      {
        type: 'list',
        message: 'Select a license:',
        name: 'license',
        choices: ['MIT', 'IPL', 'Apache 2.0', 'BSD 3', 'None']
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
      {
          type: 'input',
          message: 'What is the Contributing information?',
          name: 'contribution',
        },
      {
        type: 'input',
        message: 'What is the Test information?',
        name: 'test',
      },
        
    ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    writeToFile('README.md', generateMarkdown(data)); 
    });
}

// Function call to initialize app
init();