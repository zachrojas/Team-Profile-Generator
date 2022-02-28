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
        <h2>${answers.id}</h2>
        <h2>${answers.email}</h2>
        <h2>${answers.role}</h2>
        <h2>${answers.github}</h2>
      </main>
    </body>
    </html>`;

inquirer
    .prompt([
    {
    type: "input",
    message: "Employee name",
    name: "username"
    },
    {
    type: "input",
    message: "Employee ID",
    name: "id"
    },
    {
    type: "input",
    message: "Employee email",
    name: "email"
    },
    {
    type: "input",
    message: "Employee role",
    name: "role"
    },
    {
      type: "input",
      message: "Github username",
      name: "github"
    }
]).then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created indexedDB.html!")
    );
});