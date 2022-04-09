const inquirer = require ('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require ('../lib/Engineer');
const Intern = require('../lib/Intern');
const employeeDataBase = require ('./employeeDataBase')
const fs = require('fs')
const path = require ('path')

let employeeData = []


const addManager = () =>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the Manager's name?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a Name'
				}
				return true
            }
		},
        {
            type:"input",
            name:"id",
            message:"What is the Employee's ID number?",
            validate: answer => {
				if(!answer.match(/^\d+$/)) {
					return 'Please enter an ID number.'
				}
				return true
            }
        },
        {
            type :"input",
            name:"email",
            message:"What is the Employee's email account?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an Email Address.'
				}
				return true
            }
        },
        {  
            type : "input",
            name: "office",
            message: "What is the manager's office number?",
            validate: answer => {
				if(!answer.match(/^\d+$/)) {
					return 'Please enter an office number.'
				}
				return true
            }
        },   
    ]).then(answers => {
        
        const {name,id,email,office} = answers
        let newManager= new Manager (name,id,email,office)
        employeeData.push(newManager)
        console.log(answers)
        addEmployee()
    })      
}

const addEngineer = () =>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the Engineer's name?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a Name'
				}
				return true
            }
		},
        {
            type:"input",
            name:"id",
            message:"What is the Employee's ID number?",
            validate: answer => {
				if(!answer.match(/^\d+$/)) {
					return 'Please enter an ID number.'
				}
				return true
            }
        },
        {
            type :"input",
            name:"email",
            message:"What is the Employee's email account?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an Email Address.'
				}
				return true
            }
        },
        {  
            type : "input",
            name: "username",
            message: "What is the Engineer's GitHub username?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a username.'
				}
				return true
            }
        }
    ]).then(answers => {
        
        const {name,id,email,username} = answers
        let newEngineer= new Engineer (name,id,email,username)
        employeeData.push(newEngineer)
        console.log(answers)
        addEmployee()
    })          
}

const addIntern = () =>{
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the Intern's name?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a Name'
				}
				return true
            }
		},
        {
            type:"input",
            name:"id",
            message:"What is the Employee's ID number?",
            validate: answer => {
				if(!answer.match(/^\d+$/)) {
					return 'Please enter an ID number.'
				}
				return true
            }
        },
        {
            type :"input",
            name:"email",
            message:"What is the Employee's email account?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter an Email Address.'
				}
				return true
            }
        },
        {  
            type : "input",
            name: "school",
            message: "What school did the Intern Attend?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a School.'
				}
				return true
            }
        }
    ]).then(answers => {
        
        const {name,id,email,school} = answers
        let newIntern= new Intern (name,id,email,school)
        employeeData.push(newIntern)
        console.log(answers)
        addEmployee()
    })          
}

const generateDataBase= () => {
    console.log('Gathering Employee Input')
    fs.writeFileSync(`${path.join(process.cwd())}/dist/employeeData.html`,employeeDataBase(employeeData), err =>{
        if (err) console.log(err)
    })
}

const addEmployee = () => { 
    inquirer.prompt(
        {
            type:"list",
            message:"What is the employee's job title?",
            name:"choice",
            choices: ["Manager","Engineer","Intern","Done"],
        })
         .then(({choice}) => {

             switch (choice) {
                 case "Manager":
                     addManager()
                     return "Manager"

                case "Engineer":
                    addEngineer()
                    return "Engineer"

                case "Intern":
                    addIntern()
                    return "Intern"

                case "Done":
                    generateDataBase()
                    process.exit()
             }
         })
     
}


const getStartMenu = () => {
    
        console.log('             ===(:================:)===')
        console.log("           Let's build an employee contact-list")
        console.log('            please follow the prompts')
        console.log('             ===(:================:)===')
   
    inquirer
        .prompt({
            type:"list",
            message:"Are you ready to begin?",
            name:"choice",
            choices: ["Yes","No"],
        })
        .then(({choice}) => {
            switch (choice) {
                case "Yes":
                    addEmployee()
                    return "Let's Begin"
                    
                case "No":
                    console.log("Restart Program when you're ready")

            }
        })
}

module.exports= {addEmployee, getStartMenu}
