import React from 'react'
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";
import { BsWind } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsThermometerHalf } from "react-icons/bs";
import { formatDateTime, getWeatherIconUrl } from '../services/weather';


function CurrentWeather({tempUnit, weather: {
  temp, feels_like, temp_min, temp_max, sunrise, sunset, speed, icon, details, timezone, name, country
}}) {
  return (
    <div>

        <div className='flex flex-row  text-white py-3 items-center justify-between'>

          <div className='flex flex-col space-y-3 text-md items-start'>

            <div className='flex space-x-2 items-center justify-center'>
              <BsThermometerHalf className='mr-1' />
              Feels Like: 
              <span className='ml-1'>{`${Math.round(feels_like)}º`}</span>
            </div>

            <div className='flex space-x-2 items-center justify-center'>
              <BsWind className='mr-1' />
              Wind: 
              <span className='ml-1'>{`${speed} ${(tempUnit === "metric" ? "m/s" : "mi/h")}`}</span>
            </div>

            <div className='flex space-x-2 items-center justify-end'>
              <BsArrowDownCircle />
              <p>
                Min: <span className='ml-1'>{`${Math.round(temp_min)}º`}</span>
              </p>
            </div>

            <div className='flex space-x-2 items-center justify-end'>
              <BsArrowUpCircle />
              <p>
                Max: <span className='ml-1'>{`${Math.round(temp_max)}º`}</span>
              </p>
            </div>

            <div className='flex space-x-2 items-center justify-end'>
              <BsSunrise />
              <p>
                Rise: <span className='ml-1'>{formatDateTime(sunrise, timezone, "hh:mm a")}</span>
              </p>
            </div>

            <div className='flex space-x-2 items-center justify-end'>
              <BsSunset />
              <p>
                Set: <span className='ml-1'>{formatDateTime(sunset, timezone, "hh:mm a")}</span>
              </p>
            </div>

          </div>
        




          <div className='flex flex-col space-y-8 text-md pl-16 items-center justify-center'>

            {/* <div className='flex items-center justify-center mt-10 mb-6'>
              <p className="text-white font-medium text-5xl">
                  {`${name}`} <span className='opacity-50'>{`${country}`}</span>
              </p>
            </div> */}

            <div className='flex items-center justify-center mt-10 mb-6'>
              <img src={getWeatherIconUrl(icon)} alt="" className='scale-225' />
            </div>

            <div className='flex text-2xl text-white items-center justify-center py-6 '>
              <p>{details}</p>
            </div>

          </div>

          <div className='flex items-center justify-center mt-10 mb-6'>
              <p className='text-12xl ml-12'>{`${Math.round(temp)}º`}</p>
          </div>




        </div>


        {/* <div className='flex flex-row text-white text-lg items-center justify-center space-x-8 py-3'>
          
          <div className='flex text-md space-x-2 items-center justify-center'>
            <BsThermometerHalf className='mr-1' />
            Feels Like: 
            <span className='ml-1'>{`${Math.round(feels_like)}º`}</span>
          </div>

          <div className='flex text-md space-x-2 items-center justify-center'>
            <BsWind className='mr-1' />
            Wind: 
            <span className='ml-1'>{`${speed} ${(tempUnit === "metric" ? "m/s" : "mi/h")}`}</span>
          </div>

        </div>

        <div className='flex flex-row text-white text-lg items-center justify-center space-x-8 py-3'>
          
          <div className='flex text-md space-x-2 items-center justify-center'>
            <BsArrowDownCircle />
            <p>
              Min: <span className='ml-1'>{`${Math.round(temp_min)}º`}</span>
            </p>
          </div>

          <div className='flex text-md space-x-2 items-center justify-center'>
            <BsArrowUpCircle />
            <p>
              Max: <span className='ml-1'>{`${Math.round(temp_max)}º`}</span>
            </p>
          </div>

          <div className='flex text-md space-x-2 items-center justify-center'>
            <BsSunrise />
            <p>
              Rise: <span className='ml-1'>{formatDateTime(sunrise, timezone, "hh:mm a")}</span>
            </p>
          </div>

          <div className='flex text-md space-x-2 items-center justify-center'>
            <BsSunset />
            <p>
              Set: <span className='ml-1'>{formatDateTime(sunset, timezone, "hh:mm a")}</span>
            </p>
          </div>

        </div> */}
    </div>

  )
};

export default CurrentWeather;