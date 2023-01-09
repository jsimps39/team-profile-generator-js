const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('src/page-template.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//const empArray[];

const employeeInfo = [
    {
        type: 'list',
        message: 'What is this employees role?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    },
{
    type: 'input',
    message: 'What is this employees name?',
    name: 'name',
    validate: nameInput => {
        if (nameInput){
            return true;
        }else {
            console.log("Please return this employee's name");
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is this employees id?',
    name: 'id',
    validate: idInput => {
        if(idInput){
            return true;
        }else {
            console.log('please enter this employees id');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is this employees email?',
    name: 'email',
    validate: emailInput => {
        if (emailInput) {
            return true;
        }else{
            console.log('please input employees email');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is this managers office phone number?',
    name: 'officeNumber',
    when: (officeNumberInput) => officeNumberInput.role === 'Manager',
    validate: officeNumberInput => {
        if (officeNumberInput) {
            return true;
        }else{
            console.log('please input the managers number');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'What is this employees github?',
    name: 'gitHub',
    when: (gitHubInput) => gitHubInput.role === 'Engineer',
    validate: gitHubInput => {
        if (gitHubInput) {
            return true;
        }else{
            console.log('please input employees github');
            return false;
        }
    }
},
{
    type: 'input',
    message: 'Where does this intern go to school?',
    name: 'school',
    when: (schoolInput) => schoolInput.role === 'Intern',
    validate: schoolInput => {
        if (schoolInput) {
            return true;
        }else{
            console.log('please input the interns school');
            return false;
        }
    }
},
{
    type: 'confirm',
    message: 'Do you want to add more employees to the list?',
    name: 'confirmEmp',
    default: false,
},
]


const addEmployee = () => { 
    return inquirer.createPromptModule(employeeInfo)
    .then(employeeData => {
        let { role, name, id, email, officeNumber, gitHub, school } = employeeData;
        let employee;
        if(role === 'Manager'){
            employee = new Manager(name, id, email, officeNumber)
        }
        if(role === 'Engineer'){
            employee = new Engineer(name, id, email, gitHub)
        }
        if(role === 'Intern'){
            employee = new Intern(name, id, email, school)
        }
    
    empArray.push(employee);

    if(employeeData.confirmAddEmployee) {
        return promptEmployee(empArray);
     }else {
        return empArray;
     }
 });
}