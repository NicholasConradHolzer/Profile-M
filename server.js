//"server.js" acts as the call file for the package manager primarily; 
//file is called on to start program; however questions and output logic
//redirected to the "utils.js" file in the "src" folder.
// const fs = require('fs')
const start = require ('./src/startup')

const runTB = () => {
    start()
};

runTB ();