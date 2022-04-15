const Emp = require ('./Employee')
//Modify EMPLOYEE object MANAGER with extension:

class Manager extends Emp{
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office= office
    }

    getOffice () {
        return this.office
    }

    getJob () {
        return "Manager"
    }

    setOffice () {
        this.office = num
        return this.office
    }
}

module.exports = Manager
