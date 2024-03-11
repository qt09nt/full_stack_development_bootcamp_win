const p = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //resolve([1,2,3]);
        reject (new Error('error has occurred'));
    }, 3000);
})

console.log(p)

//calling a promise
//p.then().catch()
p.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

//OUTPUT:
// Error: error has occurred
//     at Timeout._onTimeout (C:\Users\qt09n\Desktop\full_stack_development_bootcamp_win\npm_new_project\asynchronous_error.js:4:17)
//     at listOnTimeout (node:internal/timers:573:17)
//     at process.processTimers (node:internal/timers:514:7)