var express = require('express');  //importing the express package
var app = express();  //create a web application
app.use(express.json());

//create a web server
var server = app.listen(3000, function(){
    console.log("Server is runinng on port 3000....");
});
//to run the server type: node studentAPI.js in the terminal


const students = [{id: 101, name: 'Donald Duck', grade: 3},
                  {id: 102, name: 'Mickey Mouse', grade: 4},
                   {id: 108, name: 'Goofy', grade: 1},
                {id: 120, name: 'John Candy', grade: 4}];

app.get('/students', (req, res) => {
    res.send(students);
})

app.get('students/:id', (req, res) => {
    const student = students.find((element) => {
        if (element.id === parseInt(req.params.id)) {
            return true
        }
    })
    if (student) {
        return res.status(200).send(student);
    }
    return res.status(404).send('Wrong ID, No Student Found')
})

//post method Route Handler
//two arguments for the post method is path - which represents the path needed and its type as a string
//callback - a function which will execute when the path matches
//create an object with the properties of a student and get the values from the request body
//after you create the object, push it to the array using the push method, and send the succesfully added
//student back to the user using the send method with 200 status code
app.post('/students/add_student', (req, res)=>{
    const student = {
        id: req.body.id,
        name: req.body.name,
        grade: req.body.grade
    };
    students.push(student);
    res.status(200).send(student);
});

//Put method - overwrite student info based on ID
////two arguments for the post method is path - which represents the path needed and its type as a string
//callback - a function which will execute when the path matches
//search for the student in the array by their ID, which is provided as a route parameter after parsing it
//to an integer. Then the ID is compared to the ID of each student in the array and if there is a match,
//then you will get that student to be updated
//if student exists, it will update all their properties with the specified properties in the request body
//and send the updated student in the 200 status code
//if the student does not exist then you will send a 404 status code with a suitable message
app.put('/students/overwrite_student/:id', (req, res) => {
    const student = students.find((element)=>{
        if(element.id === parseInt(req.params.id))
        {return true;}
    });
    if (student){
        student.id = req.body.id;
        student.name = req.body.name;
        student.grade = req.body.grade;
        return res.status(200).send(student);
    }
        return res.status(404).send('Wrong ID, No Student Found');
});

//patch method route handler
//search for the student in the array by the ID that's provided as a route parameter after parsing it to an
//integer. Then the ID is compared to the ID of each student in the array and if there is a mathc you update 
//that student
//if the student already exists, you will use a for loop, which is used with objects where is a local variable
//that save the key name, instead of the index number (like arrays and traditional for loops). The student 
//will be updated to the value of any key that exists in the request body.
//Then the studnet will be sent back with a 200-status code.
//if there isn't a student with a given ID, 404-status code will be sent with a suitable message 
app.patch('/students/update_student/:id', (req, res)=>{
    const student = students.find((element)=>{
        if(element.id === parseInt(req.params.id))
            {return true;}
    });
    if(student) {
        for (let i in req.body){
            student[i] = req.body[i];
        }
        return res.status(200).send(student);
    }
    return res.status(404).send('Wrong ID, No Student Found');
});

//delete method route handler
//send it the arguments:
// path - path needed and its type as a string; 
//callback - function which will be executed when the path matched
//check whether the student exists
//if the student exists, store the index of the indexOf method; Then use the splice method,
//and send it to the index of the element to be deleted and the number of elements to be deleted (one (1) 
//element) in this case. Next, send back the deleted student with 200 status code
//if there isn't a student witht given ID, a 404 status code will be sent with a suitable message
app.delete('/students/delete/:id', (req, res)=>{
    const student = students.find((element)=>{
        if(element.id === parseInt(req.params.id))
            {return true;}
    });
    if(student){
        const index = students.indexOf(student);
        students.splice(index,1);
        return res.status(200).send(student);
    }
    return res.status(404).send('Wrong ID, No Student Found');
});
