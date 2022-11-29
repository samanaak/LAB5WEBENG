import assert from 'simple-assert-ok';
import { ExecutiveStudent } from './ExecutiveStudent.js';
let tests = [];
var runTest = () => {
    allTestCases();
    if (tests.length > 0){
        tests.forEach((test)=> {
            test.run();
        });
    }
}

function allTestCases(){
    testCase(
        "Testing if Executive Student is inheriting student class ",
        function (){
            var ExecutiveStudentobj = new ExecutiveStudent("1",
            "samana", 
            "4-feb-2001");
            assert(ExecutiveStudentobj.id === "1",result ("OK"));
            assert(ExecutiveStudentobj.name === "samana", result ("OK"));
            assert(ExecutiveStudentobj.DOB === "4-feb-2001", result ("OK"));
    
        }
    );
}

function testCase (caseName, func){
    tests = [
        ...tests,
        {
            message: function() {
                console.log(`---Running test case: ${caseName}`);
                console.log('----------------------------------');
                },
                run: function(){
                this.message();
                func();
                }
                }];
                }

                runTest();

    export { runTest }

        
  
