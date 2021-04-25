const Manager = require("../lib-classes/Manager");
const Employee = require("../lib-classes/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const a = new Manager("Joe", 1, "testManager@test.com", testValue);
  expect(a.officeNumber).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const a = new Manager("Joe", 1, "testManager@test.com", testValue);
  expect(a.getOfficeNumber()).toBe(testValue);
});
