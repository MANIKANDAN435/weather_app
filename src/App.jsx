import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import Body from './Body'
import Humidity from './Humidity';

const App = () => {

    const [celsius ,setCelsius] = useState(0)
    const [city ,setCity] = useState("Chennai")
    const [country ,setCountry] = useState("IN")
    const [lat ,setLat] = useState(0)
    const [log ,setLog] = useState(0)
    const [heat , setHeat] = useState(0)
    const [wind , setWind] = useState(0)
    const [text,setText] = useState("Chennai")
    const [error,setError]= useState("")
    const [loading,setLoading] = useState(true)

    const API_KEY = "1d6c74e4f4d0905fad175b2695cb6574" 
    

      const fetchdata = async()=>{
        setLoading(true)
        try{
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=Metric`
) 
          const data = await response.json()
          if(data.cod !== 200){
            
              setError("City or country not found. Please check the spelling.")
            
           
            
              
          }else{

          
          setWind(data?.wind?.speed || 0 )
          setLog(data?.coord?.lon || 0 )
          setLat(data?.coord?.lat || 0 )
          setHeat(data?.main?.humidity || 0 )
          setCelsius(data?.main?.temp || 0 )
          setCountry(data?.sys?.country || "NA")
         
          }
        }
        catch (err){
          setError("An error occurred while fetching data. Please try again.");
         
        }
        setLoading(false)
      }

     const handleenter = (e)=>{
        if(e.key === "Enter" && text.trim() !== ""){
        
           const formattedCity = text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase()
           setText(formattedCity); // Update input field value
           setCity(formattedCity);
        
        }
     }

     const handlereload = ()=>{
       window.location.reload()
     }
     const handleclick =  ()=>{
     
       const formattedCity = text.trim().charAt(0).toUpperCase() + text.trim().slice(1).toLowerCase()
       setText(formattedCity); // Update input field value
       setCity(formattedCity);
     }

      

      useEffect(()=>{
        fetchdata()
      },[city])
 
      if(loading){
        return <p>Loading please wait..</p>
      }

  return (
    <div className='h-200 bg-white w-100 mx-auto rounded ' >
    <div className=' bg-white rounded-2xl p-4 mt-10'>
      <div className='flex justify-evenly items-center border-2  border-blue-400  rounded py-2 px-2 mt-2 ' >
        <input 
       
        value={text}
        className='flex-1 border-none outline-none'
        type="text"  
        placeholder='Enter City'
        onChange={(e)=>setText(e.target.value)}
        onKeyDown={handleenter}
        />
        <IoSearch onClick={handleclick}  className='cursor-pointer'/>
      </div>

        {
          error && <h1 className='  flex justify-center items-center text-2xl text-center flex-wrap mt-40'>
            {error}
            <button onClick={handlereload} className='mt-5 border-1 rounded-xl px-2 py-1 text-[20px] text-white bg-gray-950 border-black  hover:bg-gray-800'>Back</button>
          </h1>
        }

      { !error &&
      <>
        <Body 

            celsius = {celsius}
            city = {city}
            country = {country}
            lat = {lat}
            log = {log}
           
      />
      <Humidity
             wind = {wind}
             heat = {heat}
      />
      </>
      }
    </div>
    </div>
  )
}

export default App