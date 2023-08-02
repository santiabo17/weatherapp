import logo from '../logo.svg';
import React from 'react';
import './App.css';
import { CitySearch } from '../CitySearch';
import { CityContainer } from '../CityContainer';
import { CityCard } from '../CityCard';
import { SelectedCity } from '../SelectedCity';
import { Clock } from '../Clock';
import { TodayData } from '../TodayData';
import { TodayDataCard } from '../TodayDataCard';
import { NextDaysData } from '../NextDaysData';
import { NextDaysDataCard } from '../NextDaysDataCard';

function App() {

  const [searching, setSearching] = React.useState(false);

  const [possibleResults, setPossibleResults] = React.useState(null);

  const [city, setCity] = React.useState('Dolores UY')

  const [weather, setWeather] = React.useState(null);

  const [principalCities, setPrincipalCities] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('http://api.weatherapi.com/v1/forecast.json?key=c2b0baff920b421db8c140210230208&q=Dolores Uruguay')
  //   .then(response => response.json())
  //   .then(data => setDoloresWeather(data))
  // }, [])

  React.useEffect(() => {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=c2b0baff920b421db8c140210230208&q='+city+'&days=6')
    .then(response => response.json())
    .then(data => setWeather(data))
  }, [city])


  console.log(weather);

  React.useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/city?min_population=1000000&limit=12", {
      method: 'GET',
      headers: {'X-Api-Key': 'xtJgZu646g1Hkpv6J+2cSw==8cZj6ppUaVlUTOgE'},
    })
    .then(response => response.json())
    .then(result => setPrincipalCities(result))
  }, [])
  
  // React.useEffect(() => {
  //   fetch("https://api.api-ninjas.com/v1/city?name=Dol&limit=5", {
  //     method: 'GET',
  //     headers: {'X-Api-Key': 'xtJgZu646g1Hkpv6J+2cSw==8cZj6ppUaVlUTOgE'},
  //   })
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  // }, [])

  React.useEffect(() => {
    console.log('buscando: ')
    console.log(searching)
  }, [searching])

  React.useEffect(() => {
    if(searching?.length > 3){
      fetch("https://api.api-ninjas.com/v1/city?name="+searching+"&limit=5", {
        method: 'GET',
        headers: {'X-Api-Key': 'xtJgZu646g1Hkpv6J+2cSw==8cZj6ppUaVlUTOgE'},
      })
      .then(response => response.json())
      .then(result => setPossibleResults(result))
    } else {
      setPossibleResults(null)
    }
  }, [searching])
  


  // React.useEffect(() => {
  //   const daysAfter = []
  //   for (let i = 1; i < 6; i++) {
  //     const fecha = addDays(new Date(), i)
  //     fetch('http://api.weatherapi.com/v1/forecast.json?key=c2b0baff920b421db8c140210230208&q=Dolores Uruguay&dt='+fecha)
  //     .then(response => response.json())
  //     .then(data => daysAfter.push(data))
  //   }
  //   setNextDays(daysAfter);
  // }, []) 
  
  // console.log((nextDays));

  // nextDays.map(day => {
  //   console.log(day);
  // })


  // function addDays(date, add) {
  //   let [year, month, day] = [date.getFullYear(), date.getMonth()+1, date.getDate()+add];

  //   if((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month ==  12) && day >= 32){
  //     month += 1;
  //     day = (date.getDate() + add - 31);
  //   } else if ((month == 4 || month == 6 || month == 9 || month == 11) && day >= 31){
  //     month += 1;
  //     day = (date.getDate() + add - 30);
  //   } else if (month == 2 && day >= 30){
  //     month += 1;
  //     day = (date.getDate() + add - 29);
  //   } 
    
  //   // console.log([year, month, day]);

  //   let fecha = null;

  //   if (month < 10 && day < 910){
  //     fecha = year+'-0'+(month)+'-0'+day;
  //   } else if (day < 10){
  //     fecha = year+'-'+(month)+'-0'+(day);
  //   } else if (month < 10){
  //     fecha = year+'-0'+(month)+'-'+(day);
  //   } else {
  //     fecha = year+'-'+(month)+'-'+(day);
  //   }

  //   return fecha;
    
  // }

  // console.log(addDays(new Date(), 31))
  


  return (
    <body className='flex flex-col items-center bg-blue-950 text-white'> 
      <h1 className='text-7xl text-center mt-7 mb-5'>WeatherApp</h1>
      <CitySearch
        possibleResults={possibleResults}
        setSearching={setSearching}
        searching={searching}
        setCity={setCity}
      />
      <Clock hour={weather?.location.localtime}></Clock>
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
