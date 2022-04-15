
const empDb = require ('./employeeDataBase');

const fs = require('fs');
const path = require ('path');

let addMan = require ('../lib/prompts/managerPrompts');
let addEngi = require ('../lib/prompts/engineerPrompts');
let addInt = require ('../lib/prompts/internPrompts');

let empFlow = [ addMan, addEngi, addInt ];


const genDB = () => {
    console.log('Gathering Employee Input')
    fs.writeFileSync(`${path.join(process.cwd())}/../dist/employeeData.html`, empDb(empFlow), 
    err => {
        if (err) console.log(err)
    })
}

console.log(empDb)
module.exports = genDB