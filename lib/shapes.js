//if circle is selected by the user, this class will be rendered
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
         <circle cx="150" cy="110" r="80" fill="${this.shapeColor}" />
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
  
       </svg>
  `;
  }
}

//if square is selected by the user, this class will be rendered
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

//if triangle is selected by the user, this class will be rendered
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

//the classes are exported to index.js
module.exports = {
  Circle,
  Square,
  Triangle,
};
