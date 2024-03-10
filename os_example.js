//OS module is used to supply utility methods related to the used operating system.
const os = require('os');
const x = os.type();
const y = os.freemem();
const z = os.totalmem();
console.log(`operating systems: ${x} free memory: ${y} total memory: ${z}`);

//output:
//operating systems: Windows_NT free memory: 1257132032 total memory: 8262471680
