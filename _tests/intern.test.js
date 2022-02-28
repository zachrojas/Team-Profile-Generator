const Intern = require("../lib/intern");

describe("Intern", () => {
    it("should create a new intern object with name, id, email, and school", () => {
      const intern = new Intern("Chris", 7000, "chrisgperez@gmail.com", "UTA");
      expect(intern.name).toEqual("Chris");
      expect(intern.id).toEqual(7000);
      expect(intern.email).toEqual("chrisgperez@gmail.com");
      expect(intern.school).toEqual("UTA")
    });
  });