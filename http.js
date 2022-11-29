import axios from 'axios';
function getSSUETHomePage(){
axios.get('https://www.ssuet.edu.pk').then((res) => {
console.log(res.data);
});
}
const HTTP = {
getSSUETHomePage
}
export { HTTP };