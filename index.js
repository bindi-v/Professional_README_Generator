// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
//const renderLicenseBadge = require('.')

const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
//inquirer to generate questions
//array of questions for user input

const promptUser = () => {
return inquirer.prompt([
   // const questions = [
{
    type: 'input',
    name: 'Title',
    message: 'What is the title of the Project?',
}, {
    type: 'input',
    name: 'Description',
    message: 'What is the project about? Give a detailed description of your project.',
}, {
    type: 'input',
    name: 'Installation',
    message: 'What does the user need to install to run for this application?',
},{
    type: 'input',
    name: 'Usage',
    message: 'How is the application used? Give instructions to use application.',
}, {
    type: 'list',
    name: 'License',
    message: 'What license did you used for this application?',
    choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A'],
},{
   type: 'input',
   name: 'Contributions',
   message: 'Who contributes in this project?',
}, {
    type: 'input',
    name: 'Github',
    message: 'What is your Github Username?',
}, {
    type: 'input',
    name: 'Email',
    message: 'What is your email Id?',
}, {
    type: 'input',
    name: 'Questions',
    message: 'If you have any questions related to project? Reach out me at :',
},
]);
};

//  generateMarkdown = (answers) =>
// `# ${answers.title}

// ## Description
// ![License](https://img.shields.io/badge/License-MIT-yellow)
//   ${answers.Description}

//   ## Table Of Contents

//   * [Installation](#installation)
//   * [Usage] (#usage)
//   * [License] (#license)
//   * [Contribution] (#contribution)
//   * [GitHub] (#github)
//   * [Email] (#email)
  
//   ## Installation 
//   The following necessary dependencies must be installed to run the application.
//   ${answers.installation}

//   ## Usage

//   ${answers.usage}

//   ## License
//   This project is licensed under
//   ${answers.license}

//   ## Contribution
//   ${answers.contribution}

//   ## Contact
//   * GitHub : ${answers.github}
//   * Email : ${answers.email}
//   * 
//   ## Questions
//   If you have any questions, please reach out to this email,
//   ${answers.email}`;

  // Bonus using writeFileAsync as a promise
const init = () => {
    promptUser()
.then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));
};
  
 // init();

//.then((answers) => {
//const newFileName = generateMarkdown(answers);

//fs.writeFile('README.md', newFileName, (err) => 
//err ? console.log(err) : console.log('You successfully generated README.md file!')
//);
//});

// function to write ReadMe file

//return fs.writeFile(fileName, answers, function(err){
 //  console.log(fileName)
//console.log(answers)

 //   if(err) {
//return console.log("Error, please provide necessary data")
//} else {
//       console.log("You successfully generated a readme file!")
//}
//})
//}

// Function call to initialize application
//function init() {
 //   inquirer.prompt(questions)
//.then ((answers) => {
//fs.writeToFile('README.md', generateMarkdown(answers));
 //      console.log(answers)
//}
 //   )}

// function call initialize application
init();
