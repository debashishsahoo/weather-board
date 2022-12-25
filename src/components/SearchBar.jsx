import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function SearchBar({tempUnit, setTempUnit, setQuery}) {
  const [city, setCity] = useState("");

  const handleSubmit = () => { 
    if (city !== '') {
      setQuery({q: city})
      setCity("");
    };
  };

  const handleCurrentLocation = () => { // Using browser geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude;
        let lon = pos.coords.longitude;
        setQuery({lat,lon});
      })
    }
  };

  const handleTempUnitToggle = (e) => { // Toggling between Celsius (Metric) and Fahrenheit (Imperial)
    const toggleToUnit = ((e.currentTarget.name === "fahrenheit") ? "imperial" : "metric");
    if (toggleToUnit !== tempUnit) {
      setTempUnit(toggleToUnit);
    };
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row items-center justify-center w-1/6'>
        <button name='celsius' onClick={handleTempUnitToggle} className='text-2xl text-white transition ease-out hover:scale-110'>ºC</button>
        <p className='mx-2'></p>
        <button name='fahrenheit' onClick={handleTempUnitToggle} className='text-2xl text-white transition ease-out hover:scale-110'>ºF</button>
      </div>

      <div className="flex flex-row items-center justify-center space-x-4 w-5/6">
        <input value={city} onChange={(event)=> setCity(event.currentTarget.value)} type="text" placeholder="Enter City . . ." className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize' />
        <FaSearch onClick={handleSubmit} size={"2em"} className="text-white cursor-pointer transition ease-out hover:scale-110"/>
        <IoLocationOutline onClick={handleCurrentLocation} size={"2.3em"} className="text-white cursor-pointer transition ease-out hover:scale-110"/>
      </div>
    </div>
  )
}

export default SearchBar
