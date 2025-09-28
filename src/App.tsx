import React from 'react';
import WeatherApp from './components/WeatherApp';
export function App() {
  return <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-50 flex justify-center items-center p-3 sm:p-4 md:p-6 lg:p-8">
      <WeatherApp />
    </div>;
}