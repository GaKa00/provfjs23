// 9 (4p)
// Du ska skapa två klasser med ES6 syntax, Student och Course.

// Klassen Student ska ha följande egenskaper:
// fullname, courses (en array med kurser som är tom från början)
// och metoden
// registerCourse() som lägger till en kurs till studentens lista
// listCourses() som visar en lista på studentens kurser

// Klassen Course ska ha följande egenskaper:
// name, yhp (poäng på YH)
// och metoderna
// getCourseInfo() som visar information om kursen

// Din kod här:

// Klassen Student
class Student {
    constructor(fullname, courses) {
        this.fullname = fullname
        this.courses = []
    }

    registerCourse(Course) {
        this.courses.push(Course);

    }

    listCourse() {
        console.log(this.courses);
    }

}

// Klassen Course

class Course {
    constructor(name,yhp) {
        this.name = name;
        this.thp = yhp
    }
     getCourseInfo() {
        console.log(this.name, this.yhp)
     }
}

