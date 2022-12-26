import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import City from './components/City';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import getRelevantWeatherData from './services/weather';
import { useState, useEffect } from "react";


function App() {

  // HOOKS 

  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({q:'sydney'});
  const [tempUnit, setTempUnit] = useState('metric');

  useEffect(() => {  
    const fetchWeather = async () => {
      await getRelevantWeatherData({...query, units: tempUnit})
      .then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, tempUnit]);  


  const changeBackgroundColor = () => {
    if (weather !== null) {
      const hotLimit = ((tempUnit == "metric") ? 20 : 68); // Celsius/Fahrenheit 
      if (weather.temp >= hotLimit) {
        return "from-red-500 to-red-800"
      } else {
        return "from-purple-900 to-purple-500";
      };
    } else {
        return "from-purple-900 to-purple-500"
    }
  };

  return (
    <div className={`bg-gradient-to-br ${changeBackgroundColor()} mx-auto mt-4 py-5 px-32 h-max max-w-screen-lg`}>
      { weather ?
        <div>
          <Header weather={weather} />
        </div>
        : null
      }

      <SearchBar tempUnit = {tempUnit} setTempUnit = {setTempUnit} setQuery = {setQuery} />

      { weather ? 
        <div>
          <City weather={weather} />
          <CurrentWeather tempUnit = {tempUnit} weather={weather} />
          <ForecastWeather type="5-HOUR FORECAST" datapoints={ weather.hourly }/>
          <ForecastWeather type="5-DAY FORECAST" datapoints={ weather.daily }/>    
        </div> 
        : null 
      }
    </div>
  );
}

export default App;

