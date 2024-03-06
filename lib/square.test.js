const Shapes = require("./shapes");

describe("Shapes", () => {
  describe("Square", () => {
    it("should take input from the user and create a square with text", () => {
      const created = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="62.5" y="10" width="175" height="175" fill="red"/>
       <text x="150" y="115" font-size="60" text-anchor="middle" fill="black">CRH</text>
  
       </svg>
  `;

      const square = new Shapes.Square("CRH", "red", "black").render();
      expect(square).toBe(created);
    });
  });
});
