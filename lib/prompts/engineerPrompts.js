const inq = require ('inquirer');
const Engineer = require('../constructors/Engineer');
const start = require ('../../src/utils')

let engiFlow = [];

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
        engiFlow.push(newEngi)
        console.log(answers)
        start()
    })          
}

module.exports = addEngi