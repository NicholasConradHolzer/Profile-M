// const Employee = require("./Employee")

// class Manager extends Employee{
//     constructor(Office){
//         this.Office= Office
//     }

//     getOffice(){
//         return this.Office
//     }
// }


const Employee = require ('./Employee')

class Manager extends Employee{
    constructor(name,id,email,office) {
        super(name,id,email)
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

module.exports= Manager