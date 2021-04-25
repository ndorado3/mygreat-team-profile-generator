const Intern = require("../lib-classes/Intern");

test("Can set school via constructor", () => {
  const testValue = "UNCC";
  const a = new Intern("Joe", 1, "testIntern@test.com", testValue);
  expect(a.school).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UNCC";
  const a = new Intern("Joe", 1, "testIntern@test.com", testValue);
  expect(a.getSchool()).toBe(testValue);
});
