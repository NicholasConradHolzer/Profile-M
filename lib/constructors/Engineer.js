const Emp = require("./Employee")
//Modify EMPLOYEE object with ENGINEER extension:
/*Engineer shortened to ENGI not ENG because of possible confusion with EMP for employee*/
class Engineer extends Emp {
    constructor (name, id, email, gitname) {
        super(name, id, email)
        this.gitname = gitname
    }

    getUser() { 
        return this.gitname
    }

    getJob(){
        return "Engineer"
    }

    setUser() {
        return this.gitname
    }
}

module.exports= Engineer