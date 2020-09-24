import { createStore } from 'redux'
import reducer from "../redux/reducer"
var store = createStore(reducer);

export default store;

// axios.get('http://127.0.0.1:8000/', {

//     headers: headers,
// }).then(function (data) {
//     console.log('response is : ' + data);
// }).catch(function (error) {
//     console.log(error.config);
// });