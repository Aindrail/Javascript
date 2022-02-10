let student = {
    first : 'Aindrail' ,
     last : 'Santra' ,
    age :21,
    heigth : 170 ,
    studentInfo : function(){
        return this.first + " "+ this.last;
    }

    };
console.log(student.first);
console.log(student.last);
student.first = 'Krishna'; //changes value
console.log(student.first);
student.age++;
console.log(student.age); 
console.log(student.studentInfo());