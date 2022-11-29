import { open } from 'sqlite';
import sqlite3Offline from 'sqlite3-offline';
function openStudentDB() {
console.log('opening DB connection');
return open('', {
client: "sqlite",
connection: {
    database: "./db/student.db"
}
});
}
function createStudentTable(db) {
console.log('creating Student table');
return db.exec('CREATE TABLE ExecutiveStudent (id INTEGER, name TEXT)');
}
function insertStudentRecord(db) {
console.log('inserting Student record');
return db.exec("INSERT INTO student VALUES (1, 'samanaEXECUTIVE')");
}
function selectStudentRecord(db) {
console.log('selecting Student record');
return db.get('SELECT id, name FROM student');
}
const DB = {
openDB: openStudentDB,
createTable: createStudentTable,
insertStudent: insertStudentRecord,
selectStudent: selectStudentRecord
};
export { DB };