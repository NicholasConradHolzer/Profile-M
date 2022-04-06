const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name,id,email,school){
        super(name,id,email)
        this.school = school
    }

    getSchool(){
        return this.school
    }

    getJob (){
        return "Intern"
    }

    setSchool(){
        this.school = ""
        return this.school
    }
}

module.exports=Intern