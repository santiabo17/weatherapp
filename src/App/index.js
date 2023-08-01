import logo from '../logo.svg';
import './App.css';
import { CitySearch } from '../CitySearch';
import { CityContainer } from '../CityContainer';
import { CityCard } from '../CityCard';
import { SelectedCity } from '../SelectedCity';
import { Clock } from '../Clock';

function App() {
  return (
    <body className='flex flex-col items-center'> 
      <h1 className='text-7xl text-center mt-7'>WeatherApp</h1>
      <CitySearch></CitySearch>
      <Clock></Clock>
      <SelectedCity name="Río de Janeiro" temperature="20°C"></SelectedCity>
      <CityContainer>
        <CityCard name="Río de Janeiro" temperature="20°C"/>
        <CityCard name="Tokio" temperature="12°C"/>
        <CityCard name="Moscu" temperature="2°C"/>
      </CityContainer>
    </body>
    
  );
}

export default App;
