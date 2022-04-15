const intResp = (plug) => {
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
module.exports = intResp