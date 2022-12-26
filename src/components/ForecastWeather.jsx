import React from 'react'
import { getWeatherIconUrl } from '../services/weather';

function ForecastWeather({type, datapoints}) {
  return (
    <div>
        <div className="flex items-center justify-start mt-6">
            <p className='text-white font-semibold'>
                {type}
            </p>
        </div>
        <hr className='my-2' />

        <div className='flex flex-row items-center justify-between text-white mt-2'>
            {datapoints.map((datapoint) => (
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-sm'>{datapoint.header}</p>
                    <img src= {getWeatherIconUrl(datapoint.icon)} alt="" className='w-12 my-1' />
                    <p>{`${Math.round(datapoint.temp)}º`}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ForecastWeather