const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("can create github", () => {
    const testGithub = "JamesJ";
    const emp = new Engineer("JamesJ", 18, "chumilyrockz@yahoo.com", testGithub);
    expect(emp.github).toBe(testGithub);
})

test("testing getGithub will pass github", () => {
    const testGithub = "JamesJ";
    const emp = new Engineer("JamesJ", 18, "chumilyrockz@yahoo.com", testGithub);
    expect(emp.getGithub()).toBe(testGithub);
})

test("test the employee role", () => {
    const testValue = "Engineer";
    const emp = new Engineer("JamesJ", 18, "chumilyrockz@yahoo.com");
    expect(emp.getRole()).toBe(testValue);
})