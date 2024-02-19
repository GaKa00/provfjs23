 export class Student {
  constructor(fullname, courses) {
    this.fullname = fullname;
    this.courses = [];
  }

  registerCourse(Course) {
    this.courses.push(Course);
  }

  listCourses() {
    console.log(this.courses);
  }
}
