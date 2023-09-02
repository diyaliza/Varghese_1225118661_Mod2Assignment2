var students = []
var student1 = {
    name: 'Jane Austin',
    birthYear: 2002,
    course: 'IFT 478',
    grade: 90,
    age: function calculate(){
        if(this.active){
            return 2022 - this.birthYear
        }
    } 
    }

var student2 = {
    name: 'Andy Moorre',
    birthYear: 2000,
    course: 'IFT 456',
    grade: 100,
    age: function calculate(){
        if(this.active){
            return 2022 - this.birthYear
        }
    } 
    }

students.push(student1);
students.push(student2);

students.forEach((item)=> console.log(item.age()));
console.log(students)
// console.log(student2.age());
// console.log(student1.age());
