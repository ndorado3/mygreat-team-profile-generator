//
const inquirer = require("inquirer");
const fs = require("fs"); //fs = file system
const generateProfile = require("./generateProfile");
const Manager = require("./lib-classes/Manager");
const Engineer = require("./lib-classes/Engineer");
const Intern = require("./lib-classes/Intern");
// const Employee = require("./lib-classes/Employee");
// const generateProfileHTML = require("./generateProfile");

let arrayTeam = [];
let team = ``;

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
        finalHTLM();
        console.log("Your Team profile page was successfully created!");
      }
    });
}

//creates the html page 
async function finalHTLM() {
  for (let i = 0; i < arrayTeam.length; i++) {
    team = team + generateProfile.generateTeamCards(arrayTeam[i]);
  }
  let generatedHTML = generateProfile.generateProfileHTML(team);
  fs.writeFileSync("./output/index.html", generatedHTML, (err) =>
    err
      ? console.error(err)
      : console.log("Your Team's Profile page is ready to view")
  );
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
      arrayTeam.push(
        new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        )
      );
      console.log(arrayTeam);
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
        name: "name",
      },
      {
        type: "input",
        message: "What is the Engineer's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Engineer's Github username?",
        name: "github",
      },
    ])
    .then((answers) => {
      arrayTeam.push(
        new Engineer(
          answers.name, 
          answers.id, 
          answers.email, 
          answers.github)
      );
      console.log(arrayTeam);
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
        name: "name",
      },
      {
        type: "input",
        message: "What is the Intern's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the Intern's School?",
        name: "school",
      },
    ])
    .then((answers) => {
      arrayTeam.push(
        new Intern(answers.name, answers.id, answers.email, answers.school)
      );
      console.log(arrayTeam);
      mainMenu();
    });
}

//This function starts the application with the Manager questions
function init() {
  getManager();
}

//Initiates the form
init();
