const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require('./src/page-template');

const prompt = inquirer.createPromptModule();

const teamArray =[];

const chooseEmployeeType = ( {type} ) => {
    let response;
    switch(type) {
        case 'Engineer':{
            response = prompt(engineerQuestions);
        }
        case 'Intern':{
            response = prompt(internQuestions);
        }
        case 'Manager':{
            response = prompt(managerQuestions);
        }
    }
    console.log('response');
};

const managerQuestions = [
    {
        message: 'What is the managers name?',
        name: 'name'
    },
    {
        message: 'What is the managers id?',
        name: 'id'
    },
    {
        message: 'What is the managers email?',
        name: 'email'
    },
    {
        message: 'What is the managers office number?',
        name: 'officeNumber'
    }
 ];//
const engineerQuestions = [
    {
        message: 'What is the engineers name?',
        name: 'name'
    },
    {
        message: 'What is the engineers id?',
        name: 'id'
    },
    {
        message: 'What is the engineers email?',
        name: 'email'
    },
    {
        message: 'What is the engineers github?',
        name: 'gitHub'
    }
];//.then(({ name, id, email, gitHub}) => {
//     const engineer = new Engineer(name, id, email, gitHub);
//     teamArray.push(engineer);
//     console.log(teamArray);
// });
const internQuestions = [
    {
        message: 'What is the interns name?',
        name: 'name'
    },
    {
        message: 'What is the interns id?',
        name: 'id'
    },
    {
        message: 'What is the interns email?',
        name: 'email'
    },
    {
        message: 'What is the interns school?',
        name: 'school'
    }
];//.then(({ name, id, email, school}) => {
//     const intern = new Intern(name, id, email, school);
//     teamArray.push(intern);
//     console.log(teamArray);
// });

//functions go here 
const confirmEmp = ({ confirmEmp }) => {
    return prompt({
        message: 'Would you like to add more employees?',
        type: 'confirm',
        name: 'addMore'
    })
};

const addMoreEmp = ({ addMore }) => {
    if(addMore) {
        console.log('Continue');
        //need more code here 
        chooseEmpType()
        .then(getEmpType)
        .then(confirmEmp)
        .then(addMoreEmp);
    } else {
        const template = pageTemplate(teamArray);
        fs.writeFileSync('./dist/team.html', template);
        console.log('Success, written to File');
    }
};


// already have this function on line 14?
const chooseEmpType = ({ chooseType }) => {
    return prompt({
        type: 'rawList',
        message: 'What kind of employee would you like to add?',
        choices: [
            'Intern',
            'Engineer',
            'Manager'
        ],
        name: 'type'
    })
};

// already have this function on line 14?
const getEmpType = async ({ getType }) => {
    switch(type) {
        case 'Engineer':{
            //return prompt(engineerQuestions);
            const response = await prompt(engineerQuestions);
            const { name, id, email, officeNumber} = response;
            const engineer = new Engineer(name, id, email, gitHub);
            teamArray.push(engineer);
            console.log(teamArray);
            break;
        }
        case 'Intern':{
            //return prompt(internQuestions);
            const response = await prompt(internQuestions);
            const { name, id, email, school} = response;
            const intern = new Intern(name, id, email, school);
            teamArray.push(intern);
            console.log(teamArray);
            break;
        }
        case 'Manager':{
            //return prompt(managerQuestions);
            const response = await prompt(managerQuestions);
            const { name, id, email, officeNumber} = response;
            const manager = new Manager(name, id, email, officeNumber);
            teamArray.push(manager);
            console.log(teamArray);
            break;
        }
    }
};


prompt(managerQuestions)
.then(({ name, id, email, officeNumber}) => {
    const manager = new Manager(name, id, email, officeNumber);
    teamArray.push(manager);
})
.then(confirmEmp)
.then(addMoreEmp);