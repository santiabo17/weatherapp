import logo from '../logo.svg';
import React from 'react';
import './App.css';
import { useWeather } from './useWeather';
import { CitySearch } from '../CitySearch';
import { CityContainer } from '../CityContainer';
import { CityCard } from '../CityCard';
import { SelectedCity } from '../SelectedCity';
import { Clock } from '../Clock';
import { TodayData } from '../TodayData';
import { TodayDataCard } from '../TodayDataCard';
import { NextDaysData } from '../NextDaysData';
import { NextDaysDataCard } from '../NextDaysDataCard';
import { Loader } from '../Loader/Loader';

function App() {

  const {principalCities, setCity, hora, weather, searching, setSearching, possibleResults} = useWeather();
  console.log("clima:"); 
  console.log(weather);

  return (
    <body className='flex flex-col items-center bg-blue-950 text-white min-h-screen'> 
      <h1 className='text-5xl sm:text-6xl text-center mt-4 mb-5 lg:text-7xl'>WeatherApp</h1>
      <CitySearch
        possibleResults={possibleResults}
        setSearching={setSearching}
        searching={searching}
        setCity={setCity}
      />
      <Clock hour={hora}></Clock>
      <SelectedCity 
        name={weather?.location.name}
        region={weather?.location.region} 
        country={weather?.location.country}
        temperature={weather?.current.temp_c} 
        wind = {weather?.current.wind_kph}
        condition={weather?.current.condition.text}
        icon={weather?.current.condition.icon}
      >
      </SelectedCity>
      <TodayData>
        {weather?.forecast.forecastday[0].hour.map((day) => {
          return <TodayDataCard 
                    hour={day.time}
                    temperature={day.temp_c} 
                    icon={day.condition.icon}
                  />
        })}
      </TodayData>
      <NextDaysData>
        {weather?.forecast.forecastday.map((dia,index) => {
          if (index != 0){
            return <NextDaysDataCard 
            maxTemp={dia.day.maxtemp_c}
            minTemp={dia.day.mintemp_c}
            wind = {dia.day.maxwind_kph}
            icon={dia.day.condition.icon}
            date={dia.date}
            />
          }
          
        })}
      </NextDaysData>
      <CityContainer>
        {principalCities?.map(city => {
          return (
            <CityCard 
              name={city.name}
              onCity={() => {
                setCity(city.name + ' ' + city.country)
                }                
              }
            />
          )
            
        })}
      </CityContainer>
    </body>
    
  );
}

export default App;
