const Intern = require("../lib/Intern");

test("can create school", () => {
    const testSchool = "School Name";
    const emp = new Intern("JamesJ", 18, "chumilyrockz@yahoo.com", testSchool)
    expect(emp.school).toBe(testSchool);
})

test("testing getSchool will pass testSchool", () => {
    const testSchool = "School Name";
    const emp = new Intern("JamesJ", 18, "chumilyrockz@yahoo.com", testSchool);
    expect(emp.getSchool()).toBe(testSchool);
})

test("test the employee role", () => {
    const testValue = "Intern";
    const emp = new Intern("JamesJ", 18, "chumilyrockz@yahoo.com");
    expect(emp.getRole()).toBe(testValue);
})