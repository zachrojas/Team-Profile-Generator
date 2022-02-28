const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should create a new engineer object with github and employee info", () => {
    const gitHubValue = "ZachRojasGithub";
    const engineer = new Engineer(
      "Zach",
      6000,
      "zachrojas94@gmail.com",
      "zachrojas"
    );
    expect(engineer.name).toEqual("Zach");
    expect(engineer.id).toEqual(6000);
    expect(engineer.email).toEqual("zachrojas94@gmail.com");
    expect(engineer.github).toEqual("zachrojas");
  });
});
