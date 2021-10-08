// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('utils');

const generateMarkdown = require('./utils/generateMarkdown');

//inquirer to generate questions
//array of questions for user input

const questions = ([
{
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
    type: 'list',
    name: 'License',
    message: 'What license did you used for this application?',
    choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A']
},{
   type: 'input',
   name: 'Contributions',
   message: 'Who contributes in this project?'
}, {
    type: 'input',
    name: 'Github Username',
    message: 'What is your Github Username?'
}, {
    type: 'input',
    name: 'Email',
    message: 'What is your email Id?'
}, {
    type: 'input',
    name: 'Questions',
    message: 'If you have any questions related to project? Reach out me at :'
}
])
.then(({
    title,
    description,
    tableOfContent,
    installation,
    usage,
    license,
    contribution,
    github,
    email,
    questions 
})  => {
    //using template
    const template =`# ${title}
    
    # ${data.title}
    ## Description 
    $ {data.Description}
    ## Table Of Contents

    * [Installation](#installation)
    * [Usage] (#usage)
    * [License] (#license)
    * [Contribution] (#contribution)
    * [GitHub] (#github)
    * [Email] (#email)
    ## Installation 
    $ {installation}
    ## Usage
    $ {usage}
    ## License
    $ {license}
    ## Contribution
    $ {contribution}
    ## Contact
    * GitHub : $ {github}
    * Email : $ {email}`
    
    writeToFile(fileName, data);
});

// function to write ReadMe file

function writeToFile(fileName, data) {
fs.writeFile(fileName, data, function(err){
    console.log(fileName)
    console.log(data)

    if(err) {
        return console.log("Error, please provide necessary data")
    } else {
        console.log("You successfully generated a readme file!")
    }
})
}

// Function call to initialize application
function init() {
    inquirer.prompt(questions)
    .then (function(data){
        writeToFile('README.md', generateMarkdown(data));
        console.log(data)
    })
};


