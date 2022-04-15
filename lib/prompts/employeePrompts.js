const inq = require ('inquirer');
const addMan = require ('./managerPrompts');
const addEngi = require ('./engineerPrompts');
const addInt = require ('./internPrompts');
const genDB = require ('../../src/comp');
// const empDb = require ('./employeeDataBase');

// let manFlow = require ('./managerPrompts');
// let engiFlow = require ('./engineerPrompts');
// let intFlow = require ('./internPrompts');
// let empFlow = require [ manFlow, engiFlow, intFlow ];
// const fs = require('fs');
// const path = require ('path');

// const genDB= () => {
//     console.log('Gathering Employee Input')
//     fs.writeFileSync(`${path.join(process.cwd())}/dist/employeeData.html`, empDb(empData), 
//     err => {
//         if (err) console.log(err)
//     })
// }

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


module.exports = addEmp