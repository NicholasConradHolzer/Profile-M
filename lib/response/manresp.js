const manResp = (plug) => { 
    `
            <div id="manCard" class="empCard">
            <h2>Name: ${plug.name} </h2>
                <p>Title: ${plug.getJob()}</p>
				<p>Id: ${plug.id}</p>
				<p>Email: ${plug.email}</p>
				<p>Office: ${plug.office}</p>
            </div>
    `
}
module.exports = manResp