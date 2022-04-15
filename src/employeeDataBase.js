const empDb = (data) => {
    //build html database profiles for employees with schemas specified by job-title.
    let html = data.map (plug => {

    //Manager Profile
        if (plug.getJob() === "Manager") {
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
            return `
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

module.exports = empDb