const inquirer = require('inquirer');
const fs = require("fs");

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
      name: 'usage',
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
      choices: [
        {
          name: "Apache License 2.0",
          value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        },
        {
          name: "GNU General Public License v3.0",
          value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        },
        {
          name: "MIT License",
          value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        },
        {
          name: "BSD 2-Clause \"Simplified\" License",
          value: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
        },
        {
          name: "BSD 3-Clause \"New\" or \"Revised\" License",
          value: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
        },
        {
          name: "Boost Software License 1.0",
          value: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
        },
        {
          name: "Creative Commons Zero v1.0 Universal",
          value: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
        },
        {
          name: "Eclipse Public License 1.0",
          value: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
        },
        {
          name: "GNU Affero General Public License v3.0",
          value: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
        },
        {
          name: "GNU General Public License v2.0",
          value: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
        },
        {
          name: "GNU Lesser General Public License v3.0",
          value: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
        },
        {
          name: "Mozilla Public License 2.0",
          value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        },
        {
          name: "The Unlicense",
          value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
        }]
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
  .then((response) => {
    const licenseBadge = getLicenseBadge(response.license);
    const markdown = generateMarkDown(response, licenseBadge);
    fs.writeFile("generatedREADME.md", markdown, (error) => {
      error ? console.log(error) : console.log("Successfully created file: generatedREADME.md");
    });
  });

  var testResponse = {
    title: 'README Generator',
    description: 'A program to quickly generate a README based on user commandline input ',
    install: 'Clone the repository, run "npm i inquirer", run "index.js"',
    usage: 'Refer to description',
    contributionGuidelines: 'Contribute if you like',
    testInstructions: 'Your guess is as good as mine',
    license: 'MIT License',
    githubUsername: 'JakeK456',
    emailAddress: 'jakek8421@gmail.com'
  }

  function generateMarkDown(response, licenseBadge){
    var markdown = 
`# ${response.title} ${licenseBadge}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${response.install}

## Usage

${response.usage}

## License

${response.license}

## Contributing

${response.contributionGuidelines}

## Tests

${response.testInstructions}

## Questions

${response.githubUsername}
${response.emailAddress}`

    return markdown;
  }