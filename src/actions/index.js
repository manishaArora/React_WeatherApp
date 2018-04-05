import axios from 'axios';

const API_KEY = 'c12216afc7bd98dc8f42b93e3698a271';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
const url = `${ROOT_URL}&q=${city},india`;
const request = axios.get(url);
console.log('Promise' ,request);
    return{
        type : FETCH_WEATHER,
        payload : request
    };
}