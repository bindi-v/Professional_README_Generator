// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);

//inquirer to generate questions
//array of questions for user input

const promptUser = () => {
return inquirer.prompt([
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


  // using writeFileAsync as a promise
const init = () => {
    promptUser()
.then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));
};

// function call initialize application
init();
