function generateMarkdown(data) {
  return `
# ${data.projectName}


 # Despcription
 ${data.descrip}

 ## Table of Contents
 ${data.tableContents}

### Installation
 ${data.install}


## Usage
 ${data.usageElm}
 # badges

 ## Contributing
 ${data.contrib}

 ## License
 ${data.licenseElm}

 ## Tests
 ${data.testElm}

 ## Questions
 ${data.questionElm}
 ![${data.avatar_url}](${data.avatar_url})



 
`;
}

module.exports = generateMarkdown;
