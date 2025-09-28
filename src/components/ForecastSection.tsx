import React from 'react';
import { WeatherCard } from './WeatherCard';
interface ForecastProps {
  forecast: {
    day: string;
    temp: number;
    condition: string;
  }[];
}
export const ForecastSection: React.FC<ForecastProps> = ({
  forecast
}) => {
  return <div className="px-3 sm:px-4 py-3 sm:py-4 bg-gray-50">
      <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase mb-2 sm:mb-3">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
        {forecast.map((day, index) => <WeatherCard key={index} day={day} />)}
      </div>
    </div>;
};