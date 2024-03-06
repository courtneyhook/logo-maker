const Shapes = require("./shapes");

describe("Shapes", () => {
  describe("Triangle", () => {
    it("should take input from the user and create a triangle with text", () => {
      const created = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <polygon points="150 5 5 195 295 195"
      fill="red"/>
       <text x="150" y="160" font-size="60" text-anchor="middle" fill="black">CRH</text>
  
       </svg>
  `;

      const triangle = new Shapes.Triangle("CRH", "red", "black").render();
      expect(triangle).toBe(created);
    });
  });
});
