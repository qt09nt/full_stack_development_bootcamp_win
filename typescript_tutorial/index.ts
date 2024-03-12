//tsc --init 
// tsc index -w
let age:number = 20;
let course:string = "Test";
let is_true:boolean = true; 
let test: any[] = [1, true, "test"];

let arr: number[] = [1,2,3,4,5]

//tuples
let user: [number, string] = [1, "Harsh"];

//to run in the terminal
//tsc index

//function example
function salary(age:number, salary: number, name:string) {
    return name + " is " + age + " year old and his salary is " + salary;
    return age * salary; 
}

var person = salary(10, 10000, 'Harsh', 1234);
console.log(person);


let employee: {
    id: number, 
    name: string
} = {id : 1, name: "Harsh"};

type Student = {
    id: number,
    name: string
}

let employee: student = {id : 1, name: "Harsh"};
let student: Student = {id: 1, name: "Harsh"};
let per: Student = { id: 1, name: 1234};

function getAge(age: number | string){
    console.log(age);
}

getAge('20');

class Person {
    //constructor
    firstName: string;
    lastName: string;
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
//var person:Person = new Person('Harsh','Gurm');

//new Person();


