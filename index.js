// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the Description?',
        name: 'description',
      },
      {
          type: 'input',
          message: 'What is in the Table of Contents?',
          name: 'contents',
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
        type: 'input',
        message: 'What is the License?',
        name: 'license',
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
      {
          type: 'input',
          message: 'What are any questions?',
          name: 'questions',
        },
        
    ])];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();