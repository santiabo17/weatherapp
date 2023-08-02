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

  React.useEffect(() => {
    fetch('http://api.weatherapi.com/v1/current.json?key=c2b0baff920b421db8c140210230208&q=Dolores Uruguay')
    .then(response => response.json())
    .then(data => setDoloresWeather(data))
  }, [])
  

  console.log(doloresWeather);

  return (
    <body className='flex flex-col items-center'> 
      <h1 className='text-7xl text-center mt-7 mb-5'>WeatherApp</h1>
      <CitySearch></CitySearch>
      <Clock hour={doloresWeather?.location.localtime}></Clock>
      <SelectedCity 
        name={doloresWeather?.location.name}
        region={doloresWeather?.location.region} 
        temperature={doloresWeather?.current.temp_c} 
        condition={doloresWeather?.current.condition.text}
        icon={doloresWeather?.current.condition.icon}
        >
        

      </SelectedCity>
      <TodayData>
        <TodayDataCard/>
        <TodayDataCard/>
        <TodayDataCard/>
      </TodayData>
      <NextDaysData>
        <NextDaysDataCard/>
        <NextDaysDataCard/>
        <NextDaysDataCard/>
        <NextDaysDataCard/>
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
