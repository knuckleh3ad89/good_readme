function generateMarkdown(data) {
  return `
  
# ${data.projectName}
[![License: ${data.licenseElm}](https://img.shields.io/badge/License-${data.licenseElm}-blue.svg)](#license)

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

 ## [License] (#license)
 ${data.licenseElm}
 
 ## Tests
 \`\`\`
 ${data.testElm}
 \`\`\`
 ## Questions

 ![${data.avatar_url}](${data.avatar_url})

 If you have any questions about the repo, or any issue you can contact me at [${data.name}](${data.html_url}) directly.


`

    ;
}

module.exports = generateMarkdown;
