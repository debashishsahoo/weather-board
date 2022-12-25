import React from 'react'
import { getWeatherIconUrl } from '../services/weather';

function ForecastWeather({type, datapoints}) {
  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className='text-white font-medium'>
                {type}
            </p>
        </div>
        <hr className='my-2' />

        <div className='flex flex-row items-center justify-between text-white'>
            {datapoints.map((datapoint) => (
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-light text-sm'>{datapoint.header}</p>
                    <img src= {getWeatherIconUrl(datapoint.icon)} alt="" className='w-12 my-1' />
                    <p className='font-medium'>{`${Math.round(datapoint.temp)}º`}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ForecastWeather