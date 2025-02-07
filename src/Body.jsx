import React from 'react'
import sun from './assets/images.png'
const Body = ({ city , country , lat ,log ,celsius}) => {
  return (
    <div className='text-center'>
        <div className='flex justify-center' >
            <img src={sun} alt="weather" />
        </div>
        <div className='text-4xl font-bold my-2' >{celsius}°C </div>
        <div className='font-bold text-5xl text-green-700 uppercase  my-2 '>{city}</div>
        <div className='text-2xl my-2 '>{country}</div>
        <div className='flex justify-evenly gap-2 my-2 '>
            <div>
                <h3 className='font-semibold' >latitude</h3>
                <h3>{lat}</h3>
            </div>
            <div>
                <h3 className='font-semibold' >longitude</h3>
                <h3>{log}</h3>
            </div>
        </div>
    </div>
  )
}

export default Body