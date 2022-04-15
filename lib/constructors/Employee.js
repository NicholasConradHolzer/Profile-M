class Emp {
//construct basic employee object; exports to inquirer and can be routed through
//object extenders in other /lib files based on inquirer prompts
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return this.name
    }

    getJob() {
        return "Employee"
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }
}

//export employee object to object-extendensions
module.exports = Emp
