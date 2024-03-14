//tsc --init 
// tsc index -w
var age = 20;
var course = "Test";
var is_true = true;
var test = [1, true, "test"];
var arr = [1, 2, 3, 4, 5];
//tuples
var user = [1, "Harsh"];
//to run in the terminal
//tsc index
//function example
function salary(age, salary, name) {
    return name + " is " + age + " year old and his salary is " + salary;
    return age * salary;
}
var person = salary(10, 10000, 'Harsh', 1234);
console.log(person);
var employee = { id: 1, name: "Harsh" };
var employee = { id: 1, name: "Harsh" };
var student = { id: 1, name: "Harsh" };
var per = { id: 1, name: 1234 };
function getAge(age) {
    console.log(age);
}
getAge('20');
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var pers = new Person('Harsh', 'Gurm');
console.log(pers);
