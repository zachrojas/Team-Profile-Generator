const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
const path = require("path");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamGen = require("./src/teamGenerator");

const teamProfiles = [];

const teamQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter employee name",
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee id",
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email",
        },
        {
            type: "list",
            name: "role",
            message: "Choose role",
            choices: ["Intern", "Engineer", "Manager"]
        },
    ])
};