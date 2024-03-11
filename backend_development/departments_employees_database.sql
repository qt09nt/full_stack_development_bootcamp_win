-- Departments/employees database Mini Project

-- 1) create department's table with the following attributes
-- ID (Primary Key)
-- Name
-- Department_Name
CREATE table departments
(department_ID INT identity PRIMARY KEY NOT NULL,
EMPLOYEE_NAME VARCHAR(30) NOT NULL,
DEPARTMENT_NAME VARCHAR(30) NOT NULL);


-- 2) create the employee's table with the following attributes:
CREATE TABLE employees 
(ID INT identity primary key NOT NULL unique check (ID>0),
employee_name varchar(30) NOT NULL,
DepartmentID INT NOT NULL UNIQUE CHECK(department_ID>0));

-- 3) insert 3 records in each of the employees and the department's tables
INSERT INTO departments VALUES
(012, 'Mabel Pines', 'Arts'),
(023, 'Simon Says', 'Humanities'),
(039, 'Leuprecht Fer', 'Economics');

INSERT INTO employees
(3455378, 'Albert Eins', '091'),
(2309589, 'Lory Ing', '023'),
(2939343, 'Johnny Apple', '039');

-- 4) Alter the employee's table and add the column salary to it. Make
-- sure the value is not null
ALTER table employees 
ADD salary INT(10) NOT NULL;

-- 5) delete all the departments in the database, and make sure that you have deleted
-- the corresponding employees from the employee's table
ALTER TABLE departments
DROP COLUMN department_ID;

-- delete records from employee's table that correspond to 
-- a departmentid found in departments table
DELETE FROM employees
WHERE DepartmentID = '039';




 
 


 
 

