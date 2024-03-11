//that module provides functions for dealing with the file system, all the provided
//functions have 2 types:
//1) synchronous
//2) asynchronous

//first way we are using the code is the synchronous way adn the second way is the asynchronous way
const fs = require('fs');
const x = fs.readFileSync('./test.txt', {encoding: 'utf8'});

console.log(x);

fs.readFile('./test.txt', {encoding: 'utf8'}, (err, data) => {
    if(err){
        console.log(err);
            return;
            }
            else{
                console.log(data);
            }

    }
});