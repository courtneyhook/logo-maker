const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "logoText",
      message:
        "Enter the text for your logo. (Must not contain more than 3 characters.) ",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a text color.",
    },
    {
      type: "list",
      name: "logoShape",
      message: " Select a shape for the logo.",
      choices: ["square", "circle", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color.",
    },
  ])
  .then((response) => {
    console.log(response);
    if (response.logoShape === "circle") {
      createCircle();
    } else if (response.logoShape === "square") {
      createSquare();
    } else if (response.logoShape === "triangle") {
      createTriangle();
    }
  });

function createCircle() {
  console.log("Circle created");
}

function createSquare() {
  console.log("Square created");
}

function createTriangle() {
  console.log("Triangle created");
}
