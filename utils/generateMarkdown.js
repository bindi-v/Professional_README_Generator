// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "![License](https://img.shields.io/badge/License-MIT-yellow)"
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "[![License: MIT](https://opensource.org/licenses/MIT)"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ![License](https://img.shields.io/badge/License-MIT-yellow)
    ${data.Description}
    ## Table Of Contents

    * [Installation](#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contribution] (#contribution)
    * [GitHub] (#github)
    * [Email] (#email)
    
    ## Installation 
    The following necessary dependencies must be installed to run the application.
    ${installation}
    ## Usage

    ${usage}
    ## License
    This project is licensed under
    ${license}
    ## Contribution
    ${contribution}
    ## Contact
    * GitHub : ${github}
    * Email : ${email}
    ## Questions
    If you have any questions, please reach out to this email,
    ${email}

`;
}

module.exports = generateMarkdown;