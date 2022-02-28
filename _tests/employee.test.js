const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should create a new employee object with name, id and email", () => {
    const employee = new Employee("Zach", 6000, "zachrojas94@gmail.com");
    expect(employee.name).toEqual("Zach");
    expect(employee.id).toEqual(6000);
    expect(employee.email).toEqual("zachrojas94@gmail.com");
  });
});
