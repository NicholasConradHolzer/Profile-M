const Emp = require('./Employee')
//Modify EMPLOYEE object with INTERN extension:

class Intern extends Emp {
    constructor (name, id, email, school){
        super(name, id, email)
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