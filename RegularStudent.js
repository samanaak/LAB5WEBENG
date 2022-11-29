import { Student } from './student.js';

class RegularStudent extends Student{
constructor(id, name, DOB){
    super(id,name,DOB)
}
AttendLab(){
console.log(`${this.name}, Student Attending lab`);
};

}
export { RegularStudent };