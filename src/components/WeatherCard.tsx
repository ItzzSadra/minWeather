import React from 'react';
import { SunIcon, CloudIcon, CloudRainIcon, CloudDrizzleIcon } from 'lucide-react';
interface WeatherCardProps {
  day: {
    day: string;
    temp: number;
    condition: string;
  };
}
export const WeatherCard: React.FC<WeatherCardProps> = ({
  day
}) => {
  // Function to get the appropriate icon based on condition
  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />;
      case 'partly cloudy':
        return <CloudIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />;
      case 'cloudy':
        return <CloudIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />;
      case 'rainy':
        return <CloudRainIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />;
      case 'drizzle':
        return <CloudDrizzleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />;
      default:
        return <SunIcon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />;
    }
  };
  return <div className="flex flex-col items-center p-2 sm:p-3 bg-white rounded-lg shadow-sm">
      <span className="text-xs sm:text-sm font-medium text-gray-700">
        {day.day}
      </span>
      <div className="my-1 sm:my-2">{getWeatherIcon(day.condition)}</div>
      <span className="text-sm sm:text-base font-medium text-gray-800">
        {day.temp}°
      </span>
    </div>;
};