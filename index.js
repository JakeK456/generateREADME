const inquirer = require('inquirer');

inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter the description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter the installation instructions:',
        name: 'install',
        },
    {
        type: 'input',
        message: 'Enter the usage information:',
        name: 'usageInformation',
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines:',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Enter the test instructions:',
        name: 'testInstructions',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'license',
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause \"Simplified\" License", "BSD 3-Clause \"New\" or \"Revised\" License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
    },
    {
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'Enter email address:',
        name: 'emailAddress',
    },
  ])
  .then((response) =>
    console.log(response)
  );
