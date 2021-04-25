const Engineer = require("../lib-classes/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const a = new Engineer( "Joe", 1, "testEngineer@test.com",testValue);
  expect(a.github).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const a = new Engineer("Joe", 1, "test@test.com", testValue);
  expect(a.getGithub()).toBe(testValue);
});
