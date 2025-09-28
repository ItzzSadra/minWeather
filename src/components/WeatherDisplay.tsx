import React from 'react';
import { SunIcon, CloudIcon, CloudRainIcon, CloudDrizzleIcon, DropletIcon, WindIcon } from 'lucide-react';
interface WeatherDisplayProps {
  location: string;
  current: {
    temp: number;
    condition: string;
    humidity: number;
    wind: number;
    feelsLike: number;
  };
}
export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  location,
  current
}) => {
  // Function to get the appropriate icon based on condition
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <SunIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-yellow-400" />;
      case 'partly cloudy':
        return <CloudIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gray-400" />;
      case 'cloudy':
        return <CloudIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gray-500" />;
      case 'rainy':
        return <CloudRainIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-blue-400" />;
      case 'drizzle':
        return <CloudDrizzleIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-blue-300" />;
      default:
        return <SunIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-yellow-400" />;
    }
  };
  return <div className="px-4 sm:px-6 pt-6 sm:pt-8 pb-3 sm:pb-4 text-center">
      <h2 className="text-lg sm:text-xl font-medium text-gray-700">
        {location}
      </h2>
      <div className="mt-4 sm:mt-6 flex justify-center">
        {getWeatherIcon(current.condition)}
      </div>
      <div className="mt-3 sm:mt-4">
        <span className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800">
          {current.temp}°
        </span>
        <p className="text-sm sm:text-base text-gray-500 mt-1">
          {current.condition}
        </p>
      </div>
      <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 text-center text-xs sm:text-sm text-gray-500">
        <div className="flex flex-col items-center">
          <DropletIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-1" />
          <span>Humidity</span>
          <span className="font-medium text-gray-700 mt-1">
            {current.humidity}%
          </span>
        </div>
        <div className="flex flex-col items-center">
          <WindIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mb-1" />
          <span>Wind</span>
          <span className="font-medium text-gray-700 mt-1">
            {current.wind} km/h
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-1">
            <SunIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
          </div>
          <span>Feels Like</span>
          <span className="font-medium text-gray-700 mt-1">
            {current.feelsLike}°
          </span>
        </div>
      </div>
    </div>;
};