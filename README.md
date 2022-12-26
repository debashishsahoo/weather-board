# Weather Board

Built using React, **Weather Board** provides you with a simple dashboard that displays current weather data and forecasting for any city in the world. The data is fetched from the OpenWeatherMap API and displayed seamlessly on this application.

## Features

- Displays weather data such as temperature, real feel, humidity, wind, daily highs and lows, and the times for sunrise and sunset for any city in the world, and presents hourly forecast for the next five hours and daily forecast for the next five days.
- Allows the user to toggle between Celsius and Fahrenheit units which is immediately reflected onto the UI.
- Allows the user to see the weather in their current location by simply clicking the pinpoint icon to the right of the search bar, provided the browser receives permission to access the user's location.
- Changes background colors to reflect the temperature at the location.

![]()
![]()
![]()

## How To Run This Project

1. Clone the repository.

2. Visit [OpenWeatherMapAPI](https://openweathermap.org/api), create an account to generate your API key, and subscribe to the [One Call by Call](https://openweathermap.org/price) subscription plan which provides you with 1000 free calls per day to the One Call API 3.0 that is used in this project. 

3. Add your API key in Line 6 of /src/services/weather.js
   ```
   const API_KEY = ""
   ```

4. Ensure you have [Node.js](https://nodejs.org/en/) installed on your system.
	
5. Open your Terminal (Mac) and run the following lines of code:-
   
   Use the appropriate command to navigate into the project directory:
   ```
   cd weather-board
   ```
   
   Install required dependencies:
   ```
   npm install
   ```
   
   Run the project on your local host:
   ```
   npm start
   ```
    
## Languages and Tools Used
- [React](https://reactjs.org)
- [Tailwind CSS](https://reactjs.org)
- [Luxon](https://moment.github.io/luxon/#/)
   - JavaScript library that allows you to conveniently format dates and times.

## Data Sources
- [OpenWeatherMapAPI](https://openweathermap.org/api)
  - All weather data has been sourced from OpenWeatherMap's API.
- [React Icons](https://react-icons.github.io/react-icons)

## License
This project is licensed under the [GPL-3.0 License](./LICENSE). Please include a link to this GitHub repository.
