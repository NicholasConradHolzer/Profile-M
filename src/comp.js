
const empDb = require ('./employeeDataBase');
const fs = require('fs');
const path = require ('path');

let manFlow = require ('../lib/prompts/managerPrompts');
let engiFlow = require ('../lib/prompts/engineerPrompts');
let intFlow = require ('../lib/prompts/internPrompts');
let empFlow = [ manFlow, engiFlow, intFlow ];

const genDB = () => {
    console.log('Gathering Employee Input')
    fs.writeFileSync(`${path.join(process.cwd())}/dist/employeeData.html`, empDb(empFlow), 
    err => {
        if (err) console.log(err)
    })
}
module.exports = genDB