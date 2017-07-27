import axios from 'axios';

const API_KEY = '8022563e2a9c56e7e4ffb23f2b1e00f0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  console.log('URL', url)
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}