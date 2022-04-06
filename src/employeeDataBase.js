const Manager = require("../lib/Manager")

const employeeData = (data) => {
    let html = data.map (employee => {
        if(employee.getJob() === "Manager") {
            return `
            <div class="box-content h-32 w-32 p-4 border-4">
            <h2>Name: ${employee.name} </h2>
                <p>Title: ${employee.getJob()}</p>
				<p>Id: ${employee.id}</p>
				<p>Email: ${employee.email}</p>
				<p>Office: ${employee.office}</p>
            </div>
            `
        } else if ( employee.getJob() === "Engineer") {
            return `
            <div class="box-content h-32 w-32 p-4 border-4">
            <h2>Name: ${employee.name}</h2>
                <p>Title: ${employee.getJob()}</p>
				<p>Id: ${employee.id}</p>
				<p>Email: ${employee.email}</p>
				<p>GitHub: https://github.com/${employee.username}</p>
            </div>
            `
        } else if ( employee.getJob() === "Intern") {
            return `
            <div class="box-content h-32 w-32 p-4 border-4">
            <h2>Name: ${employee.name}</h2>
                <p>Title: ${employee.getJob()}</p>
				<p>Id: ${employee.id}</p>
				<p>Email: ${employee.email}</p>
				<p>School:${employee.school}</p>
            </div>
            `
        }
    })
console.log(data)

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
    
    <header class="container mx-auto px-10 bg-red-700 flex justify-center">
    <body>
        <h1 class="text-white text-lg ">Super Cool Employee Data Base</h1>
    </header>
            <p>${html.join("")}</p>
    </body>
    </html>
        `
}

module.exports= employeeData