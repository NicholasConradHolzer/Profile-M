const Engineer = require ('../lib/Engineer')

test ('Gets the GitHub username', () => {
    const newEngineer = new Engineer ('name','manager',1,'email@domain.com','username')
    expect (newEngineer.getUser()).toBe('username')
})