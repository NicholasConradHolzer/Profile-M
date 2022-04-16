
const fs = require('fs');
const path = require ('path');

let addMan = require ('../lib/prompts/managerPrompts');
let addEngi = require ('../lib/prompts/engineerPrompts');
let addInt = require ('../lib/prompts/internPrompts');
let manData = Array.from(addMan, manData)
let engiData = Array.from(addEngi)
let intData = Array.from(addInt)
let empFlow = [ manData, engiData, intData]
// {addMan, addEngi, addInt }
const empDb = (data) => {

    let html = data.map (plug => {
    //Manager Profile
        if (plug.getJob() === "Manager") {
            // /*return*/ manResp(plug);
            return `
            <div id="manCard" class="empCard">
            <h2>Name: ${plug.name} </h2>
                <p>Title: ${plug.getJob()}</p>
				<p>Id: ${plug.id}</p>
				<p>Email: ${plug.email}</p>
				<p>Office: ${plug.office}</p>
            </div>
    `
    //Engineer Profile
        } else if ( plug.getJob() === "Engineer") {
            // /*return*/ engiResp(plug);
            return  `
            <div id="engiCard" class="empCard">
            <h2>Name: ${plug.name}</h2>
                <p>Title: ${plug.getJob()}</p>
				<p>Id: ${plug.id}</p>
				<p>Email: ${plug.email}</p>
				<p>GitHub: https://github.com/${plug.gitname}</p>
            </div>
    `
    //Intern Profile
        } else if ( plug.getJob() === "Intern") {
            // /*return*/ intResp(plug);
            return `
            <div id="intCard" class="empCard">
            <h2>Name: ${plug.name}</h2>
                <p>Title: ${plug.getJob()}</p>
				<p>Id: ${plug.id}</p>
				<p>Email: ${plug.email}</p>
				<p>School:${plug.school}</p>
            </div>
        `
        }
    })
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Profile-M</title>
    </head>

    <body>
    <header>
        <h1>Profile-M</h1>
        <h2>&lt;html&gt; Database:</h2>
    </header>
        <div id="roster">${html.join("")}</div>
    </body>
    </html>
        `
}

const genDB = () => {
    console.log('Gathering Employee Input')
    fs.writeFileSync(`${path.join(process.cwd())}/dist/employeeData.html`, empDb(empFlow), 
    err => {
        if (err) console.log(err),
        console.log(empFlow)
    })
}

module.exports = genDB