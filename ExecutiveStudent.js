import { Student } from './student.js';

class ExecutiveStudent extends Student{
constructor(id, name, DOB){
    super(id,name,DOB)
}
AttendThoery(){
console.log(`${this.name}, Student Attending Theory`);
};

}
export { ExecutiveStudent };