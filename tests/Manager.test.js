const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const testManager = {
    name: "Andrew",
    id: 138223,
    email: "andrewrandolph98@gmail.com",
    github: "Andrewjr98",
    
};

const testRoles = {
    engineer: "Engineer",
    manager: "Manager",
    intern: "Intern",
    officeNumber: 1
};

test('Manager Object is Created',() =>{
    const manager = new Manager(testManager.name, testManager.id, testManager.email, testManager.github);

    expect(manager.name).toEqual(testManager.name);
    expect(manager.id).toEqual(testManager.id);
    expect(manager.email).toEqual(testManager.email);
    expect(manager.getOfficeNumber()).toEqual(testManager.officeNumber);
});

test('Get Managers Office Number',() =>{
    const manager = new Manager(testManager.name, testManager.id, testManager.email, testManager.github);

    expect(manager.getOfficeNumber()).toEqual(testManager.officeNumber);
});

test('Get Employee Role', () => {
    const manager = new Manager(testManager.name, testManager.id, testManager.email, testManager.github, testRoles.manager);

    expect(manager.getRole()).toEqual(testRoles.manager);
});