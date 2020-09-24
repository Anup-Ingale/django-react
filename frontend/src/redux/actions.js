
export const ADD_WEATHER = "ADD_WEATHER";
export const REMOVE_CITY = "REMOVE_CITY";
export const LOAD_CITIES= "LOAD_CITIES";


export const addWeather = (payload) => (
    {
        type: ADD_WEATHER,
        input: payload.input,
    }
);
 export const removeCity = (payload) => (
    {
        type: REMOVE_CITY,
        input: payload.city,
    }
);
export const loadCities = (payload) => (
    {
        type: LOAD_CITIES,
    }
);