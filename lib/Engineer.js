const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name,id,email,username){
        super(name,id,email)
        this.username = username
    }

    getUser() { 
        return this.username
    }

    getJob(){
        return "Engineer"
    }

    setUser() {
       // this.username = ""
        return this.username
    }
}

module.exports= Engineer