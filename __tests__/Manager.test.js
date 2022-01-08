const Manager = require("../lib/Manager");

test("can create office number", () => {
    const testOfficeNumber = 9;
    const emp = new Manager("JamesJ", 18, "chumilyrockz@yahoo,com", testOfficeNumber);
    expect(emp.officeNumber).toBe(testOfficeNumber);
})

test("testing getOfficeNumber will pass testOfficeNumber", () => {
    const testOfficeNumber = 9;
    const emp = new Manager("JamesJ", 18, "chumilyrockz@yahoo,com", testOfficeNumber);
    expect(emp.getOfficeNumber()).toBe(testOfficeNumber);
})

test("test the employee role", () => {
    const testValue = "Manager";
    const emp = new Manager("JamesJ", 18, "chumilyrockz@yahoo.com");
    expect(emp.getRole()).toBe(testValue);
})