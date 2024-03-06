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
    let icon;
    if (response.logoShape === "circle") {
      icon = new Circle(
        response.logoText,
        response.shapeColor,
        response.textColor
      );
    } else if (response.logoShape === "square") {
      icon = new Square(
        response.logoText,
        response.shapeColor,
        response.textColor
      );
    } else if (response.logoShape === "triangle") {
      icon = new Triangle(
        response.logoText,
        response.shapeColor,
        response.textColor
      );
    }
    const logo = icon.render();
    fs.writeFile("logo.svg", logo, (err) =>
      err ? console.log(err) : console.log("Generated logo.svg")
    );
  });

class Circle {
  constructor(logoText, shapeColor, textColor) {
    this.logoText = logoText;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
       <circle cx="150" cy="125" r="80" fill="${this.shapeColor}" />
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

     </svg>
`;
  }
}

class Square {
  constructor(logoText, shapeColor, textColor) {
    this.logoText = logoText;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect x="62.5" y="10" width="175" height="175" fill="${this.shapeColor}"/>
     <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

     </svg>
`;
  }
}

class Triangle {
  constructor(logoText, shapeColor, textColor) {
    this.logoText = logoText;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }

  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="150 5 5 195 295 195"
    fill="${this.shapeColor}"/>
     <text x="150" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

     </svg>
`;
  }
}
