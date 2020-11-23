// array of questions for user
  //table of contents

    const inquirer = require('inquirer');
    const fs = require('fs');
    const generateMarkdown = require('./utils/generateMarkdown.js');
    const path =  require('path');
    
    const promptUser = projectData => {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'projectName',
                message: 'What is the name of your project? ',
                validate: projectNameInput => 
                {
                    if (projectNameInput) 
                    {
                        return true;
                    }
                    else 
                    {
                        console.log('Please enter your project name! ');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'projectDescription',
                message: 'Provide a description for your project: (Required) ',
                validate: projectDescription => 
                {
                    if (projectDescription) 
                    {
                        return true;
                    }
                    else 
                    {
                        console.log('Please enter your project name! ');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmInstallation',
                message: 'Would you like to include instructions for the installation process? ',
                default: true
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Submit installation documentation: ',
                when: ({confirmInstallation}) => {
                    if (confirmInstallation) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmUsage',
                message: 'Would you like to include documentation for the usage of this project? ',
                default: true
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is the purpose of this project? ',
                when: ({confirmUsage}) => {
                    if (confirmUsage) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmCredits',
                message: 'Would you like to list any collaborators?',
                default: true
            },
            {
                type: 'input',
                name: 'credits',
                message: 'List your collaborators: ',
                when: ({confirmCredits}) => {
                    if (confirmCredits) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'Choose the appropriate license for this project: ',
                choices: ['Apache', 'BSD Revised', 'BSD Simplified', 'GNU (General Public License)', 
                'GNU (Lesser General Public License)', 'MIT', 'Mozilla Public License', 'Common Development and Distribution License',
                'Eclipse Public License']
            },
            {
                type: 'confirm',
                name: 'confirmGuidelines',
                message: 'Would you like to include contribution guidelines? ',
                default: true
            },
            {
                type: 'input',
                name: 'contributionGuidelines',
                message: 'Insert contribution guidelines: ',
                when: ({confirmGuidelines}) => {
                    if (confirmGuidelines) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmTest',
                message: 'Would you like to include tests for your application? ',
                default: true
            },
            {
                type: 'input',
                name: 'test',
                message: 'Submit testing instructions: ',
                when: ({confirmTest}) => {
                    if (confirmTest) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'username',
                message: 'Please enter your GitHub username: ',
                validate: username => 
                {
                    if (username) 
                    {
                        return true;
                    }
                    else 
                    {
                        console.log('Please enter GitHub username! ');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email: ',
                validate: email => 
                {
                    if (email) 
                    {
                        return true;
                    }
                    else 
                    {
                        console.log('Please enter your email! ');
                        return false;
                    }
                }
            }
        ])
    }
        
    // function to write README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }
    
    // function to initialize program
    function init() {
        promptUser()
            .then(answers => {
                writeToFile('develop/README.md', generateMarkdown)
            }) 
    }
    
    // function call to initialize program
    init();