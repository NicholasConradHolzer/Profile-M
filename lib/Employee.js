class Employee {
    constructor(name,id,email) {
        this.name = name
        //this.job = job
        this.id = id
        this.email = email
    }

    getName(){
        return this.name
    }

    getJob(){
        return "Employee"
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }
}


module.exports= Employee
