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

  return (
    <body className='flex flex-col items-center'> 
      <h1 className='text-7xl text-center mt-7 mb-5'>WeatherApp</h1>
      <CitySearch></CitySearch>
      <Clock></Clock>
      <SelectedCity name="Río de Janeiro" temperature="20°C"></SelectedCity>
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
