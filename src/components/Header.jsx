import React from 'react'
import { formatDateTime } from '../services/weather'


function Header({weather: {dt, timezone}}) {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl">
                {formatDateTime(dt, timezone)}
            </p>
        </div>
    </div>
  )
}

export default Header