const inq = require ('inquirer');

const addMan = require ('../lib/prompts/managerPrompts');
const addEngi = require ('../lib/prompts/engineerPrompts');
const addInt = require ('../lib/prompts/internPrompts');

const genDB = require ('./comp');

const addEmp = () => { 

    inq.prompt([
        {
            type:"list",
            message:"What is the employee's job title?",
            name:"choice",
            choices: ["Manager", "Engineer", "Intern", "Done (Make Data-Base)"],
        }])

         .then(({choice}) => {
            console.log(choice)
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

module.exports = addEmp;