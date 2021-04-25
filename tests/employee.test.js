const Employee = require("../lib-classes/Employee");

test("Can incorporate Employee instance", () => {
  const a = new Employee();
  expect(typeof a).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alexander";
  const a = new Employee(name);
  expect(a.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const a = new Employee("Joe", testValue);
  expect(a.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "testEmployee@test.com";
  const a = new Employee("Joe", 1, testValue);
  expect(a.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alexander";
  const a = new Employee(testValue);
  expect(a.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const a = new Employee("Joe", testValue);
  expect(a.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "testEmployee@test.com";
  const a = new Employee("Joe", 1, testValue);
  expect(a.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const a = new Employee("Alexander", 1, "test@test.com");
  expect(a.getRole()).toBe(testValue);
});
