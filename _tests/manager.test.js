const Manager = require("../lib/manager");

describe("Manager", () => {
  it("should create a new Manager object with name, id, email, and office number", () => {
    const manager = new Manager(
      "Eric Santamaria",
      8000,
      "ericsanta@gmail.com",
      8
    );
    expect(manager.name).toEqual("Eric Santamaria");
    expect(manager.id).toEqual(8000);
    expect(manager.email).toEqual("ericsanta@gmail.com");
    expect(manager.officeNumber).toEqual(8);
  });
});
