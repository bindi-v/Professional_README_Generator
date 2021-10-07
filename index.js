const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkDown = require('./util/generateMarkDown');

//inquirer to generate questions
//array of questions for user

const questions = ([{
    type: 'input',
    name: 'Title',
    message: 'What is the title of the Project?'
}, {
type: 'input',
name: 'Description',
message: 'What is the project about? Give a detailed description of your project.'
}, {
type: 'input',
name: 'Table of Contents',
message: 'Table of Contents'
},
{
    type: 'input',
    name: 'What does the user need to install to run for this application? ',
    message: 'Installation'
},{
    type: 'input',
    name: 'Usage',
    message: 'How is the application used? Give instructions to use application.'
}, {
    type: 'input',
    name: 'License',
    message: 'What license did you used for this application?',
    choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A']
}, {
    type: 'input',
    name: 'Github Username',
    message: 'What is your Github Username?'
}, {
    type: 'input',
    name: 'Email',
    message: 'What is your email Id?'
}
])

