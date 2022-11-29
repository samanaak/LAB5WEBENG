class Student{
constructor(id, name, DOB){
this.id = id;
this.name = name;
this.DOB = DOB;
} 
enroll(){
    console.log(`Student Details: ${this.name}
    id: ${this.id},, Date of Birth: ${this.DOB}`)
}

}
export { Student };