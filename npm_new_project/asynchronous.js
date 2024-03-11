setTimeout(()=> {
    console.log('hello 1');
}, 3000);

console.log('hello 2');

//creating a promise
const p = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve([1,2,3]);
        //reject (new Error('error has occurred'));
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
// hello 2
// Promise { <pending> }
// hello 1
// [ 1, 2, 3 ]