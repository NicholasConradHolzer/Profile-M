# Profile-M
develop contact info lists on the command line for company associates



[##Click Here for Video of Use##](https://drive.google.com/file/d/1NsHK50nUmdlibj-SqRsKPa6I9FR6ZZra/view)

// return `
            // <div id="manCard" class="empCard">
            // <h2>Name: ${plug.name} </h2>
            //     <p>Title: ${plug.getJob()}</p>
			// 	<p>Id: ${plug.id}</p>
			// 	<p>Email: ${plug.email}</p>
			// 	<p>Office: ${plug.office}</p>
            // </div>
            // `

                     // return `
            // <div id="intCard" class="empCard">
            // <h2>Name: ${plug.name}</h2>
            //     <p>Title: ${plug.getJob()}</p>
			// 	<p>Id: ${plug.id}</p>
			// 	<p>Email: ${plug.email}</p>
			// 	<p>School:${plug.school}</p>
            // </div>
            // `

                        // return `
            // <div id="engiCard" class="empCard">
            // <h2>Name: ${plug.name}</h2>
            //     <p>Title: ${plug.getJob()}</p>
			// 	<p>Id: ${plug.id}</p>
			// 	<p>Email: ${plug.email}</p>
			// 	<p>GitHub: https://github.com/${plug.gitname}</p>
            // </div>
            // `

            
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