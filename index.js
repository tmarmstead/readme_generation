// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
      },
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
      },
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
      },
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
      },
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
      },
      
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
// TODO: Create an array of questions for user input
const questions = ['What is the Description?', 'What is in the Table of Contents?', 'What are the Installition instructions?', 'What is the usage of this application?', 'What is the License?', 'What is the Contributing information?', 'What is the Test information?', 'What are any questions?'];

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