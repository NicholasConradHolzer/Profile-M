const Intern = require ('../lib/Intern')

test ('Adding a school for an intern', () => {
    const newIntern = new Intern ('name','manager',1,'email@domain.com','school')
    expect(newIntern.getSchool()).toBe('school')
})