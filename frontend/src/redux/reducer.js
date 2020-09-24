import { REMOVE_CITY, ADD_WEATHER , LOAD_CITIES} from "./actions"
import { weatherData } from './states'
import axios from 'axios';
import { httpClient, headers } from "../service";

axios.get(`http://127.0.0.1:8000/`)
	.then(response => {
		// eslint-disable-next-line no-console
		console.log(response);
		//resolve()
	})
	.catch(errors => {
		// eslint-disable-next-line no-console
		console.log(errors)
		//reject()
})
export default function reducer(state = weatherData, action) {
    if (action.type == ADD_WEATHER) {
        var tempStates = [...state = {
            city :{}
        }]
        axios.get(`http://127.0.0.1:8000/add_city/`, {
            data: {
                city: action.input,
            }
        }).then(function (data) {
            tempStates.push({
                city: data.city,
                temparature: data.temparature
            });
            return tempStates;
        }).catch(function () {
            return tempStates;
        });
        tempStates.push({
            city: action.input,
            temparature: "34"
        });
        return tempStates;

    } else if (state == REMOVE_CITY) {
        var tempStates = [...state];
        axios.get(`http://127.0.0.1:8000/`, {
            data: {
                city: action.city,
            }
        }).then(function () {
            tempStates.filter((c) => c.city != action.city);
            return tempStates;
        }).catch(function () {
            return tempStates;
        });
    } else if (state == LOAD_CITIES) {
        var tempStates = [
            {
                city: "Yavatmal",
                temparature: "9.0"
            },
            {
                city: "Pune",
                temparature: "3.4"
            },
            {
                city: "Amaravati",
                temparature: "1.3"
            },
        ];
        axios.get(`http://127.0.0.1:8000/`, {
            
            data: {
                city: action.city,
            }
        }).then(function () {
            tempStates.filter((c) => c.city != action.city);
            return tempStates;
        }).catch(function () {
            return tempStates;
        });
        return tempStates;
    }
    return state;
}

