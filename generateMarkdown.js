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

// TODO: Create a function to generate markdown for README

// Create function using switch to properly render badges
function licenseBadgeChoices(license) {
    switch(license) {
        case 'MIT':
        return 'MIT';
        case 'IPL':
        return 'IPL%201.0';
        case 'Apache 2.0':
        return 'Apache%202.0';
        case 'BSD 3':
        return 'BSD%203'; 
    }
}

// Create function using switch to properly render license links
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

// Create function to generate link to github 
function generateGitHubLink(github) {
    return `https://github.com/${github}`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log('formatted license: ', renderLink(licenseLinkSwitch(data.license)))
  return `# ${data.title} 

  ${renderLicenseBadge(licenseBadgeChoices(data.license))}

  ## Table of Contents: 
  - [Description](#Description)
  - [Demo](#Demo)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)
  
  ## Description: 
  ${data.description}
 
  ## Demo:
  ![Untitled_ Jan 21, 2021 12_00 PM](https://user-images.githubusercontent.com/71151032/105384636-78a7d900-5be0-11eb-8962-17ba723098cd.gif)

  [Link to video walkthrough](https://drive.google.com/file/d/1xH-42FhAGogtRVaiMP0IeE_bHc9r7bKA/view)

  ## Installation: 
  ${data.installation}
  
  ## Usage: 
  ${data.usage}
  
  ## License: 
  Click the link below for full licensing information: \n
  ${renderLink(licenseLinkSwitch(data.license))} \n
  ${renderLicenseBadge(licenseBadgeChoices(data.license))} 
 
  
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