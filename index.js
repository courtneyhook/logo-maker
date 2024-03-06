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
      const circle = new Circle(
        response.logoText,
        response.textColor,
        response.shapeColor
      );
      console.log(circle);
    } else if (response.logoShape === "square") {
      const square = new Square(
        response.logoText,
        response.textColor,
        response.shapeColor
      );
      console.log(square);
    } else if (response.logoShape === "triangle") {
      const triangle = new Triangle(
        response.logoText,
        response.textColor,
        response.shapeColor
      );
      console.log(triangle);
    }
  });

//Child classes for icon
function Circle(logoText, textColor, shapeColor) {
  Shape.call(this, logoText, textColor, shapeColor);
  console.log("Circle created");
}

function Square(logoText, textColor, shapeColor) {
  Shape.call(this, logoText, textColor, shapeColor);
  console.log("Square created");
}

function Triangle(logoText, textColor, shapeColor) {
  Shape.call(this, logoText, textColor, shapeColor);
  console.log("Triangle created");
}

//Parent class for icon
function Shape(logoText, textColor, shapeColor) {
  this.xmlns = "http://www.w3.org/2000/svg";
  this.height = "200px";
  this.width = "300px";
  this.logoText = logoText;
  this.textColor = textColor;
  this.shapeColor = shapeColor;

  this.printData = function () {
    console.log("Generated logo.svg");
  };
}

//console.log(icon);
//<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
{
  /* <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg> */
}
{
  /* <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="blue" />
</svg> */
}
{
  /* <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
  <polygon points="200,10 250,190 150,190" style="fill:lime;stroke:purple;stroke-width:3" />
</svg> */
}
