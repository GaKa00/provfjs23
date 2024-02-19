import { Course } from "./course.js";
import { Student } from "./student.js";

const Gabriel = new Student("Gabriel", []);
const Daniel = new Student("Daniel", []);

const FJS = new Course("FJS", 55);
const FJX = new Course("FJX", 40);
const GPTkunskap = new Course("GPT", 0);

Gabriel.registerCourse(FJS);
Gabriel.registerCourse(GPTkunskap);
FJS.getCourseInfo();
GPTkunskap.getCourseInfo();
Gabriel.listCourses();

Daniel.registerCourse(FJX);
Gabriel.registerCourse(GPTkunskap);
FJX.getCourseInfo();
GPTkunskap.getCourseInfo();
Daniel.listCourses();
