
const engiResp = (plug) => { 
    `
            <div id="engiCard" class="empCard">
            <h2>Name: ${plug.name}</h2>
                <p>Title: ${plug.getJob()}</p>
				<p>Id: ${plug.id}</p>
				<p>Email: ${plug.email}</p>
				<p>GitHub: https://github.com/${plug.gitname}</p>
            </div>
    `
}
module.exports = engiResp