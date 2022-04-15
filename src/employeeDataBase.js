
const manResp = require('../lib/response/manresp');
const engiResp = require('../lib/response/engiresp');
const intResp = require('../lib/response/intresp');

const empDb = (data) => {
    //build html database profiles for employees with schemas specified by job-title.
    let html = data.map (plug => {

    //Manager Profile
        if (plug.getJob() === "Manager") {
            return manResp(plug);
            
    //Engineer Profile
        } else if ( plug.getJob() === "Engineer") {
            return engiResp(plug);

    //Intern Profile
        } else if ( plug.getJob() === "Intern") {
            return intResp(plug);
   
        }
    })

console.log(data) /*Present the profiles in command line to QA check*/

//establish default html for "front-end databasing"
    return`
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
        <div id="
            <p>${html.join("")}</p>
    </body>
    </html>
        `
}

module.exports = empDb;