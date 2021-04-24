//
const inquirer = require("inquirer");
const fs = require("fs"); //fs = file system
const generateProfile = require("./generateProfile");
const Manager = require("./lib-classes/Manager");
const Engineer = require("./lib-classes/Engineer");
const Intern = require("./lib-classes/Intern");
const Employee = require("./lib-classes/Employee");

let teamArray = [];

//main menu questions it prompts at the end of engineer & intern
function mainMenu() {
  inquirer
    .prompt({
      type: "list",
      message: "what would you like to do next?",
      choices: [
        "Add an Engineer",
        "Add and Intern",
        "I am finish building my team",
      ],
      name: "employeeType",
    })
    .then((answers) => {
      if (answers.employeeType === "Add an Engineer") {
        console.log("Please enter Engineer information");
        getEngineer();
        // how to get this question to promt mainMenu();
      } else if (answers.employeeType === "Add and Intern") {
        console.log("Please enter Intern information");
        getIntern();
      } else if (answers.employeeType === "I am finish building my team") {
        console.log("finish with form");
      }
    });
}

//Prompts and array with manager questions
function getManager() {
  console.log("Please enter Manager information:");
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Manager's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((answers) => {
      teamArray.push(
        new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        )
      );
      console.log(teamArray);
      mainMenu();
    });
}

//Prompts an array for the engineer questions
function getEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Engineer's name?",
        name: "engineerName",
      },
      {
        type: "input",
        message: "What is the Engineer's employee ID?",
        name: "engineerID",
      },
      {
        type: "input",
        message: "What is the Engineer's email?",
        name: "engineerEmail",
      },
      {
        type: "input",
        message: "What is the Engineer's Github username?",
        name: "engineerGithub",
      },
    ])
    .then((answers) => {
      teamArray.push(
        new Engineer(
          answers.engineerName,
          answers.engineerID,
          answers.engineerEmail,
          answers.ngineerGithub
        )
      );
      console.log(teamArray);
      mainMenu();
    });
}

//Prompts an array for the intern questions
function getIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the Intern's name?",
        name: "internName",
      },
      {
        type: "input",
        message: "What is the Intern's ID?",
        name: "internID",
      },
      {
        type: "input",
        message: "What is the Intern's email?",
        name: "internEmail",
      },
      {
        type: "input",
        message: "What is the Intern's School?",
        name: "internSchool",
      },
    ])
    .then((answers) => {
      teamArray.push(
        new Intern(
          answers.internName,
          answers.internID,
          answers.interEmail,
          answers.internSchool
        )
      );
      console.log(teamArray);
      mainMenu();
    });
}

//This function starts the application with the Manager questions
function init() {
  getManager();
}

//Initiates the form
init();
