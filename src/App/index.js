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

  const [doloresWeather, setDoloresWeather] = React.useState(null);

  const [weather, setWeather] = React.useState(null)

  // React.useEffect(() => {
  //   fetch('http://api.weatherapi.com/v1/forecast.json?key=c2b0baff920b421db8c140210230208&q=Dolores Uruguay')
  //   .then(response => response.json())
  //   .then(data => setDoloresWeather(data))
  // }, [])

  React.useEffect(() => {
    fetch('http://api.weatherapi.com/v1/forecast.json?key=c2b0baff920b421db8c140210230208&q=Dolores Uruguay&days=6')
    .then(response => response.json())
    .then(data => setWeather(data))
  }, [])
  

  console.log(weather);

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
    <body className='flex flex-col items-center'> 
      <h1 className='text-7xl text-center mt-7 mb-5'>WeatherApp</h1>
      <CitySearch></CitySearch>
      <Clock hour={weather?.location.localtime}></Clock>
      <SelectedCity 
        name={weather?.location.name}
        region={weather?.location.region} 
        temperature={weather?.current.temp_c} 
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
            icon={dia.day.condition.icon}
            date={dia.date}
            />
          }
          
        })}
      </NextDaysData>
      <CityContainer>
        <CityCard name="Río de Janeiro" temperature="20°C"/>
        <CityCard name="Tokio" temperature="12°C"/>
        <CityCard name="Moscu" temperature="2°C"/>
      </CityContainer>
    </body>
    
  );
}

export default App;
