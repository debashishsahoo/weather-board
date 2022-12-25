// Retrieving weather data from OpenWeatherMap API by making API calls using personal API key

import {DateTime} from "luxon"; // For reliable and convenient formatting of date and time objects

const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "1a19484871efffe07f43e3fe001145c9"; // INSERT YOUR API KEY HERE (From openweathermap.org)

const getRelevantWeatherData = async (searchParams) => {
    const currentWeatherData = await 
    getWeatherData("weather", searchParams)
    .then(getCurrentWeatherData);

    const {lat, lon} = currentWeatherData // Unpack returned latitude and longitude as it's required in the API query to get forecast data

    const forecastWeatherData = await 
    getWeatherData("onecall", {
       lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units
    })
    .then(getForecastWeatherData);

    return {...currentWeatherData, ...forecastWeatherData};
};

const getWeatherData = (category, searchParams) => {
    const url = new URL(BASE_URL + category);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})
    return fetch(url).then((result) => result.json());
}

const getCurrentWeatherData = (data) => {
    const {
        dt,
        name,
        weather,
        wind: {speed},
        coord: {lat, lon},
        sys: {country, sunrise, sunset},
        main: {temp, temp_min, temp_max, feels_like}
    } = data

    const { main: details, icon } = weather[0];

    return { details, icon, dt, name, speed, lat, lon, country, sunrise, sunset, temp, temp_min, temp_max, feels_like }
}

const getForecastWeatherData = (data) => {
    let { daily, hourly, timezone } = data; // Not a constant; need to retrive only few hours of data 

    // Need next 5 day period from the daily data. Hence, slicing (1,6).
    daily = daily.slice(1,6).map(day => {
        return {
            icon: day.weather[0].icon,
            header: formatDateTime(day.dt, timezone, 'ccc'),
            temp: day.temp.day
        };
    });

    // Need 5 hour period from the hourly data. Hence, slicing (1,6).
    hourly = hourly.slice(1,6).map(hour => {
        return {
            icon: hour.weather[0].icon,
            header: formatDateTime(hour.dt, timezone, 'hh:mm a'),
            temp: hour.temp,
        }
    });

    return { daily, hourly, timezone };
};

const getWeatherIconUrl = (iconCode) => `http://openweathermap.org/img/wn/${iconCode}@2x.png`; 

// Conveniently format date and time using the Luxon library
const formatDateTime = (secs, zone, format = "hh:mm a | ccc, dd LLL yyyy") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

export {formatDateTime, getWeatherIconUrl};
export default getRelevantWeatherData;
