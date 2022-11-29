import { RegularStudent } from './RegularStudent.js';
import { ExecutiveStudent } from './ExecutiveStudent.js';

 var RegObj = new RegularStudent("1", "samana", "4-feb-2001")
 var obj2 = new ExecutiveStudent("1", "samana", "4-feb-2001")


 RegObj.enroll();
 RegObj.AttendLab();

obj2.enroll();
obj2.AttendThoery();



