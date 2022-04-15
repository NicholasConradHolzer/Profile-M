//pull in inquirer package to provide command line question-answer logic
const inq = require ('inquirer');
const addEmp = require('../lib/prompts/employeePrompts');


//write objects to html database to save employee-info roster


//Program Introductions and first options
const start = () => {

    inq.prompt({
            type:"list",
            message:"Profile-M",
            name:"start",
            choices: ["START", "VIEW", "quit"],
        })
    
        .then(
            ({choice}) => {
            switch (choice) {
    //Yes initiates adding of employee based on answers provided to object.
                case "START": {
                    addEmp();
                    return "Starting Builder";
                }
    //Open Html page:
                case "VIEW": {
                    
                }
    //Default and negative option have same result on cl due to being functionally congruent.
                case "quit": {
                    console.log("Restart Program when you're ready")
                break;
                }
                // default: {
                //     console.log("Restart Program when you're ready")
                // }
            }
        })
}

module.exports = start
