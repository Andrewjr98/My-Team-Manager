const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

testIntern = {
    name: "Caleb",
    id: 24736,
    email: "caleb.halter@gmail.com",
    github: "ChronicSlacker24",
};

const testRoles = {
    engineer: "Engineer",
    manager: "Manager",
    intern: "Intern",
    school: "University of North Texas"
};

test('Intern Object is Created', () => {
    const intern = new Intern(testIntern.name, testIntern.id, testIntern.email, testIntern.github, testIntern.school);

    expect(intern.name).toEqual(testIntern.name);
    expect(intern.id).toEqual(testIntern.id);
    expect(intern.email).toEqual(testIntern.email);
    expect(intern.getSchool()).toEqual(testIntern.school);
});

test('Get School the Intern Attends', () => {
    const intern = new Intern(testIntern.name, testIntern.id, testIntern.email, testIntern.github, testIntern.school);

    expect(intern.getSchool()).toEqual(testIntern.school);
});

test('Get Employee Role', () => {
    const intern = new Intern(testIntern.name, testIntern.id, testIntern.email, testIntern.github, testIntern.school);

    expect(intern.getRole()).toEqual(testRoles.intern);
});