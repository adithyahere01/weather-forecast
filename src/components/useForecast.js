import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import getCurrentDayForecast from './getCurrentdayForecast';
import currentDayForecast from './getCurrentDayDetailedForecast';
import getUpcomingDaysForecast from './getUpcomingsDays';



const base_url = 'https://www.metaweather.com/api/api/location';
const cross_domain = 'https://the-ultimate-api-challenge.herokuapp.com';
const request_url = `${cross_domain}/${base_url}`

function useForecast() {
   const [error, setError] = useState(false)
   const [loading, setLoading] = useState(false)
   const [forecast, setForecast] = useState(null)

   const getWoide = async (value) =>{
    const { data } = await axios(`${request_url}/search`, {
        params: {
            query: value
        }
    })
    return data
   }

   const getForecast = async (woide) => {
       const { data } = await axios(`${request_url}/${woide}`)
       setError(false)
       setLoading(false)

       if(!data || data.length === 0){
        setError('Something went wrong');
        setLoading(false)
        return;
       }
      return data;
   }

   const gatherForecastData = (data) => {
     const currentDay =  getCurrentDayForecast(data.consolidated_weather[0], data.title);
     const currentdaydetails = currentDayForecast(data.consolidated_weather[0])
     const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather)

     setForecast({ currentDay, currentdaydetails, upcomingDays })
     setLoading(false)
   }
   
   //call the api
   const submitRequest = async value => {
      setLoading(true)
      setError(false)
      const data = await getWoide(value)

      if(!data || data.length === 0){
        setError('Oops Try different location');
        setLoading(false)
        return;
      }

      const response = await getForecast(data[0].woeid)
      if(!response) return;

      gatherForecastData(response)
   }

    return{
        error,
        loading,
        forecast,
        submitRequest
    }
}

export default useForecast
