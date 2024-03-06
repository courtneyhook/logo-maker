const Shapes = require("./shapes");

describe("Shapes", () => {
  describe("Circle", () => {
    it("should take input from the user and create a circle with text", () => {
      const created = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
         <circle cx="150" cy="110" r="80" fill="red" />
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">CRH</text>
  
       </svg>
  `;

      const circle = new Shapes.Circle("CRH", "red", "black").render();
      expect(circle).toBe(created);
    });
  });
});
