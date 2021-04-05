
// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
  //return 
  
  `## Table of Contents:
  *[Description](#Description)
  *[Usage](#Usage)
  *[Test](#Test)
  *[License](#License)
  *[GitHub](#GitHub)
  *[Email](#Email)

  #Title:
  # ${answers.title}

  ## Description:
  ${answers.description}

  ## Usage:
  ${answers.usage}

  ## Test:
  ${answers.test}

  ## License:
  ${answers.license}

  ## GitHub
  Please visit my ${answers.github} to see my work.

  ## Email
  My Email is ${answers.email}`


module.exports = generateMarkdown;
