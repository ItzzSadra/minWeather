import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { WeatherDisplay } from './WeatherDisplay';
import { ForecastSection } from './ForecastSection';
// Mock data for the app
const mockWeatherData = {
  location: 'New York',
  current: {
    temp: 23,
    condition: 'Sunny',
    humidity: 45,
    wind: 8,
    feelsLike: 25
  },
  forecast: [{
    day: 'Tue',
    temp: 24,
    condition: 'Sunny'
  }, {
    day: 'Wed',
    temp: 22,
    condition: 'Partly Cloudy'
  }, {
    day: 'Thu',
    temp: 20,
    condition: 'Cloudy'
  }, {
    day: 'Fri',
    temp: 19,
    condition: 'Rainy'
  }, {
    day: 'Sat',
    temp: 21,
    condition: 'Sunny'
  }]
};
const WeatherApp = () => {
  const [weather, setWeather] = useState(mockWeatherData);
  const [loading, setLoading] = useState(false);
  const handleSearch = (location: string) => {
    setLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      setWeather({
        ...mockWeatherData,
        location: location || 'New York'
      });
      setLoading(false);
    }, 800);
  };
  return <div className="w-full max-w-[90%] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      <SearchBar onSearch={handleSearch} />
      {loading ? <div className="flex justify-center items-center py-16 sm:py-20">
          <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div> : <>
          <WeatherDisplay location={weather.location} current={weather.current} />
          <ForecastSection forecast={weather.forecast} />
        </>}
    </div>;
};
export default WeatherApp;