// function to generate markdown for README
function generateMarkdown(answers) {
    return `
    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

    # ${answers.projectName}
    
    ## Description
   ${answers.description}

   ## Table of Contents
   - [Description](#description)
   - [Installation](#installation)
   - [Usage](#usage)
   - [Collaborators](#collaborators)
   - [License](#license)
   - [Contributing](#contributing)
   - [Tests](#tests)
   - [Questions](#questions)

   ## Installation
   ${answers.installation}

   ## Usage
   ${answers.usage}

   ## Collaborators
   ${answers.collaborators}

   ## License
   ${answers.license}

   ## Contribution
   ${answers.contributionGuidelines}


    `;
  }
  
  module.exports = generateMarkdown;