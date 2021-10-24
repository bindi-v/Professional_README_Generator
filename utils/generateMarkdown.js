//  function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/License-MIT-yellow)`
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License: MIT](https://opensource.org/licenses/MIT)`
}

//  function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//  function to generate markdown for README
function generateMarkdown(answers) {
return `# ${answers.Title}

## Description

 ![License](https://img.shields.io/badge/License-${answers.License}-yellow)

 ${answers.Description}

## Table Of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [License](#license)
- [Contribution](#contribution)
- [Contact](#contact)
- [Questions](#questions)
    
## Installation 

The following necessary dependencies must be installed to run the application.

  ${answers.Installation}

## Usage

 ${answers.Usage}

## License

This project is licensed under :

 [${answers.License}](https://opensource.org/licenses/MIT)

For more information about the license, check the above link.

## Contribution

${answers.Contributions}

## Contact

* GitHub :[${answers.Github}](add github link)
* Email : ${answers.Email}
    
## Questions

If you have any questions, please reach out to my Github,

* [${answers.Github}]

#### Thank you for visiting my Github!
`;
}

module.exports = generateMarkdown;
