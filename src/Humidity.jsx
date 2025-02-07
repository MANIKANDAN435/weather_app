import React from 'react'
import { WiStrongWind } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";


const Humidity = ({heat,wind}) => {
  return (
    <div className='flex justify-between items-center mt-10'>
        <div className='px-3 flex flex-col items-center  justify-center '>
        <WiHumidity className="w-[50px] h-[50px] text-sky-600" />
            <div className='mt-5 font-medium text-gray-500 ' >{heat}%</div>
            <div className='text-gray-500 font-medium'>Humidity</div>
        </div>
        <div className='px-3 flex flex-col items-center justify-center '>
        <WiStrongWind className="text-gray-500 w-[50px] h-[60px]" />
            <div className='mt-5 text-gray-500 font-medium ' >{wind} km/h</div>
            <div className='text-gray-500 font-medium '>Wind Speed</div>
        </div>
    </div>
  )
}

export default Humidity