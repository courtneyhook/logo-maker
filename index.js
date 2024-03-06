const fs = require("fs");
const inquirer = require("inquirer");
//this variable will use the exported classes from shapes.js
const shapes = require("./lib/shapes");

//The user is prompted to enter the values for each part of the logo.
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
    //The variable logoShape will determine which statement will be used.
    let icon;
    if (response.logoShape === "circle") {
      icon = new shapes.Circle(
        response.logoText,
        response.shapeColor,
        response.textColor
      );
    } else if (response.logoShape === "square") {
      icon = new shapes.Square(
        response.logoText,
        response.shapeColor,
        response.textColor
      );
    } else if (response.logoShape === "triangle") {
      icon = new shapes.Triangle(
        response.logoText,
        response.shapeColor,
        response.textColor
      );
    }
    //The variable 'icon' will hold all the information for the logo. 'const logo' will render the file
    const logo = icon.render();
    //the file will be created or updated
    fs.writeFile("logo.svg", logo, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });
