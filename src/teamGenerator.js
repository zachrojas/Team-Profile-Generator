const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>  
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Mini Project</title>
    </head>
    <body>
      <header>
          <h1>${answers.username}</h1>
      </header>
      <main>
        <h2>${answers.location}</h2>
        <h2>${answers.linkedin}</h2>
        <h2>${answers.github}</h2>
        <p>${answers.bio}</p>
      </main>
    </body>
    </html>`;

inquirer
    .prompt([
    {
    type: "input",
    message: "What is your name?",
    name: "username"
    },
    {
    type: "input",
    message: "Where are you located?",
    name: "location"
    },
    {
    type: "input",
    message: "What's your LinkedIn?",
    name: "linkedin"
    },
    {
    type: "input",
    message: "What's your GitHub?",
    name: "github"
    },
    {
    type: "input",
    message: "Tell us about you in two sentences",
    name: "bio",
    }
]).then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created indexedDB.html!")
    );
});