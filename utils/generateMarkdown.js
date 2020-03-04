function generateMarkdown(data) {
  return `
  
# ${data.projectName}
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

 ## Despcription
 ${data.descrip}

 ## Table of Contents
 ${data.tableContents}
 
## Installation
\`\`\`
 ${data.install}
 \`\`\`
## Usage
 ${data.usageElm}
 

 ## Contributing
 ${data.contrib}

 ## License
 ${data.licenseElm}
 
 ## Tests
 \`\`\`
 ${data.testElm}
 \`\`\`
 ## Questions

 ![${data.avatar_url}](${data.avatar_url})

 If you have any questions about the repo, or any issue you can contact me at [Anthony Guerrero](https://api.github.com/users/anthonyguerrero) directly.


`
 
;
}

module.exports = generateMarkdown;
