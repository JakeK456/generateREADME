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
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause \"Simplified\" License", "BSD 3-Clause \"New\" or \"Revised\" License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 1.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense"],
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

  function getLicenseBadge(license){
    switch (license) {
      case "Apache License 2.0": return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "GNU General Public License v3.0": return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "MIT License": return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "BSD 2-Clause \"Simplified\" License": return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      case "BSD 3-Clause \"New\" or \"Revised\" License": return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      case "Boost Software License 1.0": return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      case "Creative Commons Zero v1.0 Universal": return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      case "Eclipse Public License 1.0": return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      case "GNU Affero General Public License v3.0": return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      case "GNU General Public License v2.0": return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      case "GNU Lesser General Public License v3.0": return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      case "Mozilla Public License 2.0": return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      case "The Unlicense": return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      default: return ""
    }
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