const Employee = require("../lib/Employee")

test("create a new employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
})

test("test the name", () => {
    const name = "JamesJ";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
})

test("test the ID", () => {
    const id = 18;
    const emp = new Employee("JamesJ", id);
    expect(emp.id).toBe(id)
})

test("test the email", () => {
    const email = "chumilyrockz@yahoo.com"
    const emp = new Employee("JamesJ", 18, email);
    expect(emp.email).toBe(email);
})

test("can the test pass getName method", () => {
    const testName = "JamesJ"
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName)
})

test("can the test pass getID method", () => {
    const testID = 18;
    const emp = new Employee("JamesJ", testID);
    expect(emp.getId()).toBe(testID);
})

test("can the test pass getEmail method", () => {
    const testEmail = "chumilyrockz@yahoo.com";
    const emp = new Employee("JamesJ", 18, testEmail);
    expect(emp.getEmail()).toBe(testEmail);
})

test("test the employee role", () => {
    const testValue = "Employee";
    const emp = new Employee("JamesJ", 18, "chumilyrockz@yahoo.com");
    expect(emp.getRole()).toBe(testValue);
})