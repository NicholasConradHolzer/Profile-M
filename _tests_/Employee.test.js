const   Emp = require ('../lib/Employee')

test ('Creates an employee object', () => {
    const newEmployee = new Emp ('name','manager',1,'email@domain.com')
    expect(typeof(newEmployee)).toBe('object')
})

test ('Get Name', () => {
    const newEmployee= new Emp ('name','manager',1,'email@domain.com')
    expect(newEmployee.getName()).toBe('name')
})
test ('Creates a job', () => {
    const newEmployee = new Emp ('name','manager',1,'email@domain.com')
        expect(newEmployee.getJob()).toBe('manager')
})
       
test ('Can get Id', () => {
    const newEmployee= new Emp ('name','manager',1,'email@domain.com')
    expect(newEmployee.getId()).toBe(1)
})

test ('Creates an Email', () => {
    const newEmployee = new Emp ('name','manager',1,'email@domain.com')
    expect(newEmployee.getEmail()).toBe('email@domain.com')
})

