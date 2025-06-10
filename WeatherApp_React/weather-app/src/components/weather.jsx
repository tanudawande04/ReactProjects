import React, { useEffect, useState } from 'react';
import wind from "../assets/wind.png";

function Weather() {

  const [city, setCity] = useState("")
  const [weatherData, setWeatherData] = useState({

    cityName: "",
    humidity: "",
    temp : "",
    wind: "",
    icon: "",
    sunrise: "",
    sunset: "",

  });

  const getWeatherData = async (city) => {

    const API_KEY = "e76a51bff678e5e931aadd673ccce637"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

    try {
      const response = await fetch(url)
      const data = await response.json()

      if (!response.ok) {
        return
      }
      
      setWeatherData({
      cityName: data.name,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
        temp: Math.round(data.main.temp),
        sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      })
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getWeatherData("bhopal")
  }, [])




  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Weather App</h1>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
          className="p-3 w-64 border border-gray-700 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
        onClick={() => getWeatherData(city)}
        className="p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Search
        </button>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Centered City Name and Weather Icon */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-3xl font-bold mb-4">{weatherData.cityName}</h2>
          <img
            src={
              weatherData.icon
                ? `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`
                : wind // Fallback to a default image if no icon is available
            }
            alt="Weather Icon"
            className="w-24 h-24"
          />
        </div>
        {/* Weather Details */}
        <div className="mb-4">
          <p>
            <strong>Temperature:</strong> <span className="text-blue-400">{weatherData.temp}°C</span>
          </p>
          <p>
            <strong>Humidity:</strong> <span className="text-blue-400">{weatherData.humidity}%</span>
          </p>
          <p>
            <strong>Wind Speed:</strong> <span className="text-blue-400">{weatherData.wind} km/h</span>
          </p>
        </div>
        <div>
          <p>
            <strong>Sunrise:</strong> <span className="text-yellow-400">{weatherData.sunrise}</span>
          </p>
          <p>
            <strong>Sunset:</strong> <span className="text-orange-400">{weatherData.sunset}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
