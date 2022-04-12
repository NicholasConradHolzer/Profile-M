const employeeDatabase = (data) => {
    //build html database profiles for employees with schemas specified by job-title.
    let html = data.map (emp => {

    //Manager Profile
        if(emp.getJob() === "Manager") {
            return `
            <div>
            <h2>Name: ${emp.name} </h2>
                <p>Title: ${emp.getJob()}</p>
				<p>Id: ${emp.id}</p>
				<p>Email: ${emp.email}</p>
				<p>Office: ${emp.office}</p>
            </div>
            <br/>
            `
    //Engineer Profile
        } else if ( emp.getJob() === "Engineer") {
            return `
            <div>
            <h2>Name: ${emp.name}</h2>
                <p>Title: ${emp.getJob()}</p>
				<p>Id: ${emp.id}</p>
				<p>Email: ${emp.email}</p>
				<p>GitHub: https://github.com/${emp.gitname}</p>
            </div>
            <br/>
            `
    //Intern Profile
        } else if ( emp.getJob() === "Intern") {
            return `
            <div>
            <h2>Name: ${emp.name}</h2>
                <p>Title: ${emp.getJob()}</p>
				<p>Id: ${emp.id}</p>
				<p>Email: ${emp.email}</p>
				<p>School:${emp.school}</p>
            </div>
            <br/>
            `
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
        <h1>Profile-M:</h1>
        <h2>&lt;html&gt; Database</h2>
    </header>
    <br/>
            <p>${html.join("")}</p>
    </body>
    </html>
        `
}

module.exports = employeeDatabase
