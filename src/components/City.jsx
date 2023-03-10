import React from 'react'

function City({weather: {name, country}}) {
  return (
    <div>
        <div className='flex items-center justify-center mt-10'>
            <p className="text-white font-medium text-5xl">
                {`${name}`} <span className='opacity-50'>{`${country}`}</span>
            </p>
        </div>
    </div>
  )
}

export default City