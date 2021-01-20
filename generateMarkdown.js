// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLink(license) {
    return `https://opensource.org/licenses/${license}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderNoLicense() {
//     if(`${license}` = 'None') {
//         console.log('we selected no license', `${license}`);
//     }
//   }
   


// TODO: Create a function to generate markdown for README

// switch 
function licenseBadgeChoices(license) {
    switch(license) {
        case 'IPL':
        return 'IPL%201.0';
        case 'Apache 2.0':
        return 'Apache%202.0';
        case 'BSD 3':
        return 'BSD%203'; 
    }
}

function licenseLinkSwitch(license){
    switch(license) {
        case 'MIT':
        return 'MIT';
        case 'IPL':
        return 'IPL-1.0';
        case 'Apache 2.0':
        return 'Apache-2.0'
        case 'BSD 3':
        return 'BSD-3-Clause'
        case 'None':
        return '';
    }
}
    
function generateGitHubLink(github) {
    return `https://github.com/${github}`
}


function generateMarkdown(data) {
    console.log('formatted license: ', renderLink(licenseLinkSwitch(data.license)))
  return `# ${data.title} 

  ${renderLicenseBadge(licenseBadgeChoices(data.license))}

  ## Table of Contents: 
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)
  
  ## Description: 
  ${data.description}
  
  ## Installation: 
  ${data.installation}
  
  ## Usage: 
  ${data.usage}
  
  ## License: 
  ${renderLicenseBadge(licenseBadgeChoices(data.license))} \n
  ${renderLink(licenseLinkSwitch(data.license))} 

 




  
  ## Contribution: 
  ${data.contribution}
  
  ## Test: 
  ${data.test}
  
  ## Questions: 
  If you have any questions you can reach me with the below contact information: \n
  ${generateGitHubLink(data.github)} \n
  ${data.email}
`;
}

module.exports = generateMarkdown;