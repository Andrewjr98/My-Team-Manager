const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const testEmployee = {
    name: "Devin",
    id: 69420,
    email: 'george.lucas@gmail.com',
};

const testRoles = {
    engineer: "Engineer",
    manager: "Manager",
    intern: "Intern"
};

test('Employee object is created', () => {


    const employee = new Employee(testEmployee.name, testEmployee.id, testEmployee.email);

    expect(employee.name).toEqual((testEmployee.name));
    expect(employee.id).toEqual((testEmployee.id));
    expect(employee.email).toEqual((testEmployee.email));
});

test('gets employee ID', () => {
    const employee = new Employee(testEmployee.name, testEmployee.id, testEmployee.email);

    expect(employee.getID()).toEqual(employee.id)
});

test('Gets Employee Email', () => {
    const employee = new Employee(testEmployee.name, testEmployee.id, testEmployee.email);

    expect(employee.getEmail()).toEqual(employee.email)
});

test('Gets Employee Role', () => {
    const engineer = new Engineer(testEmployee.name, testEmployee.id, testEmployee.email, testRoles.engineer);

    expect(engineer.getRole()).toEqual(testRoles.engineer)
});