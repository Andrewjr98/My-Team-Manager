const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const testEngineer = {
    name: "Brianna",
    id: 12842,
    email: "brianna.alvear@yahoo.com",
};

const testRoles = {
    engineer: "Engineer",
    manager: "Manager",
    intern: "Intern",
    github: "HonutDoles23"
};



test('Engineer object is created', () => {
    const engineer = new Engineer(testEngineer.name, testEngineer.id, testEngineer.email, testRoles.engineer, testEngineer.github);

    expect(engineer.name).toEqual((testEngineer.name));
    expect(engineer.id).toEqual((testEngineer.id));
    expect(engineer.getEmail()).toEqual((testEngineer.email));
    expect(engineer.getGithub()).toEqual((testEngineer.github));
});

test('Get Engineers github profile', () => {
    const engineer = new Engineer(testEngineer.name, testEngineer.id, testEngineer.email, testRoles.engineer, testEngineer.github);

    expect(engineer.getGithub()).toEqual((testEngineer.github));
});

test('Get Employee Role', () => {
    const engineer = new Engineer(testEngineer.name, testEngineer.id, testEngineer.email, testRoles.engineer, testEngineer.github);

    expect(engineer.getRole()).toEqual(testRoles.engineer)
})