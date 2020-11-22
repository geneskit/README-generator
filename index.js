// array of questions for user
  //title of project (input)
  //table of contents
    //descriptions (input)
    //installation instruction (input)
    //usage information (input)
    //contribution guidelines (input)
    //test instructions (input)
    //license (checkbox)

    //github username (input)
    //email address (input)
const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: projectNameInput => 
            {
                if (projectNameInput) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Provide a description for your project: (Required)',
            validate: projectDescription => 
            {
                if (projectDescription) 
                {
                    return true;
                }
                else 
                {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstallationSection',
            message: 'Would you like to include instructions for the installation process?',
            default: true
        },
        {
            type: 'input',
            name: 
        }
    ])
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();