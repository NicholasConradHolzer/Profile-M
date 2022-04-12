//pull in inquirer package to provide command line question-answer logic
const inq = require ('inquirer');

//pull in employee title object-extensions so final html objects can be generated to 
//correct database:
const Manager = require('../lib/Manager');
const Engineer = require ('../lib/Engineer');
const Intern = require('../lib/Intern');

//pull in html schema generator to save information at completion of inquirer cycle.
const employeeDatabase = require ('./employeeDataBase')

const fs = require('fs')
const path = require ('path')

//start with employee classification array empty
let empData = []


//MANAGER object queries:
const addMan = () =>{
    inq.prompt([
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
            validate: answer => {     //email regex extends ==>
				if (!answer.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) 
                {
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
//coalate MANAGER answers and pass back to addEmp
    ]).then(answers => {
        const {name, id, email, office} = answers
        let newMan = new Manager (name, id, email, office)
        empData.push(newMan)
        console.log(answers)
        addEmp()
    })      
}


//ENGINEER object queries:
const addEngi = () =>{
    inq.prompt([
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
            validate: answer => {     //email regex extends ==>
				if (!answer.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) 
                {
					return 'Please enter an Email Address.'
				}
				return true
            }
        },
        {  
            type : "input",
            name: "gitname",
            message: "What is the Engineer's GitHub username?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a username.'
				}
				return true
            }
        }
//coalate ENGINEER answers and pass back to addEmp
    ]).then(answers => {
        
        const {name, id, email, gitname} = answers
        let newEngi = new Engineer (name, id, email, gitname)
        empData.push(newEngi)
        console.log(answers)
        addEmp()
    })          
}


//INTERN object queries:
const addInt = () =>{
    inq.prompt([
        {
            type:"input",
            name:"name",
            message:"What is the Intern's name?",
            validate: answer => {
				if(answer === "") {
					return 'Please enter a valid Name'
				}
				return true
            }
		},
        {
            type:"input",
            name:"id",
            message:"What is the Employee's ID number?",
            validate: answer => {
				if (!answer.match(/^\d+$/)) {
					return 'Please enter an ID number.'
				}
				return true
            }
        },
        {
            type :"input",
            name:"email",
            message:"What is the Employee's email account?",
            validate: answer => {     //email regex extends ==>
				if (!answer.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)) 
                {
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
//coalate INTERN answers and pass back to addEmp
    ]).then(answers => {
        const {name, id, email, school} = answers
        let newInt= new Intern (name, id, email, school)
        empData.push(newInt)
        console.log(answers)
        addEmp()
    })          
}



//write objects to html database to save employee-info roster
const genDB= () => {
    console.log('Gathering Employee Input')
    fs.writeFileSync(`${path.join(process.cwd())}/dist/employeeData.html`, employeeDatabase(empData), err =>{
        if (err) console.log(err)
    })
}


// verify employee title and send inqurer to relevent queries to fill 
//profile; once "Done" is selected sends object to be writen into html file to save the employee data
const addEmp = () => { 
    inq.prompt(
        {
            type:"list",
            message:"What is the employee's job title?",
            name:"choice",
            choices: ["Manager", "Engineer", "Intern", "Done (Make Data-Base)"],
        })

         .then(({choice}) => {

             switch (choice) {
                case "Manager":
                    addMan()
                    return "Manager"

                case "Engineer":
                    addEngi()
                    return "Engineer"

                case "Intern":
                    addInt()
                    return "Intern"

                case "Done (Make Data-Base)":
                    genDB()
                    process.exit()
            }
        })
     
}

//Program Introductions and first options
const start = () => {
    
        console.log("           Let's build an employee contact-list")
        console.log('                please follow the prompts')
        console.log('             ==============================')
        console.log('                                      ')
    
    
    inq.prompt({
            type:"list",
            message:"Begin Generating Eployee Profiles?",
            name:"choice",
            choices: ["Yes", "No"],
        })
    
        .then(({choice}) => {
            switch (choice) {
    //Yes initiates adding of employee based on answers provided to object.
                case "Yes": {
                    addEmp();
                    return "Starting Profile";
                }

    //Default and negative option have same result on cl due to being functionally congruent.
                case "No": {
                    console.log("Restart Program when you're ready")
                break;
                }
                default: {
                    console.log("Restart Program when you're ready")
                }
            }
        })
}

module.exports= {addEmp, start}
