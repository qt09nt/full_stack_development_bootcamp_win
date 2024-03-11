
//path module - built in module used to provide utilities when working with file and directory paths
const path = require('path');

//parse is a function used to parse a file by sending the file name as a parameter
//__filename is a variable that has the full path of the current file or the module

const x = path.parse(__filename);
console.log(x);
console.log(__filename);

console.log('welcome to Robo garden');

console.log('global');
globalThis.console.log('okay');
console.log('okay');



//node --version
//v20.11.1
//node js documentation

