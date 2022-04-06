const Manager = require ('../lib/Manager')

test ('Creates Office Number for manager', () => {
    const newManager = new Manager ('name','manager',1,'email@domain.com',2)
    expect (newManager.getOffice()).toBe(2)
})