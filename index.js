const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');

const teamArray = [];

const addManager = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Team Manager?',
            validate: nameInput =>{
                if (nameInput){
                    return true
                } else{
                    console.log("Please tell me who the manager is.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter manager ID',
            validate: nameInput =>{
                if (isNaN(nameInput)){
                    console.log("Please enter valid manager ID.")
                    return false;
                }else{
                    return true;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: ' Where can the manager be reached?',
            validate: email =>{
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid){
                    return true
                } else {
                    console.log ("Enter valid Email.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter Valid manager office number',
            validate:nameInput=>{
                if (isNaN(nameInput)){
                    console.log('Please enter a valid office number.')
                    return false;
                } else {
                    return true
                }
            }
        }
    ])
}