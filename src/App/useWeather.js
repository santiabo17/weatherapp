import React from "react";

function useWeather () {

    const [city, setCity] = React.useState('Dolores UY');
    const [principalCities, setPrincipalCities] = React.useState(null);
    const [hora, setHora] = React.useState(null);
    const [weather, setWeather] = React.useState(null);
    const [searching, setSearching] = React.useState('');
    const [possibleResults, setPossibleResults] = React.useState(null);
  
    

    React.useEffect(() => {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=c2b0baff920b421db8c140210230208&q='+city+'&days=6')
        .then(response => response.json())
        .then(data => {
          setWeather(data);
          setHora(data.location.localtime.substring(data.location.localtime.length-5, data.location.localtime.length));
        })
    
      }, [city])
    

    React.useEffect(() => {
        fetch("https://api.api-ninjas.com/v1/city?min_population=1000000&limit=7", {
          method: 'GET',
          headers: {'X-Api-Key': 'xtJgZu646g1Hkpv6J+2cSw==8cZj6ppUaVlUTOgE'},
        })
        .then(response => response.json())
        .then(result => setPrincipalCities(result))
      }, [])

      React.useEffect(() => {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=c2b0baff920b421db8c140210230208&q='+city+'&days=6')
        .then(response => response.json())
        .then(data => {
          setWeather(data);
          setHora(data.location.localtime.substring(data.location.localtime.length-5, data.location.localtime.length));
        })
    
      }, [city])

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
    
      
    
      console.log('hora:' + hora);
    
      
    
      function addMinute (horario) {
        let currentHour = parseInt(weather?.location.localtime.substring(weather?.location.localtime.length-5, weather?.location.localtime.length-3));
        let currentMinute = parseInt(weather?.location.localtime.substring(weather?.location.localtime.length-2, weather?.location.localtime.length));
          
        let addedHour;
    
          if(currentMinute != 59){
              currentMinute += 1;
          } else {
              currentMinute = 0;
              currentHour += 1;
          }
          if (currentHour < 10 && currentMinute < 10){
              addedHour = `0${currentHour}:0${currentMinute}`;
          } else if (currentHour < 10){
              addedHour = `0${currentHour}:${currentMinute}`;
          } else if (currentMinute < 10) {
              addedHour = `${currentHour}:0${currentMinute}`;
          }
    
          setHora(addedHour);
      }
    
        
    
          function addMinute (hora) {
            let currentHour = parseInt(hora.substring(0, hora.length-3));
            let currentMinute = parseInt(hora.substring(hora.length-2, hora.length));
    
            if(currentMinute != 59){
                currentMinute += 1;
            } else {
                currentMinute = 0;
                currentHour += 1;
            }
            
            let addedHour = `${currentHour}:${currentMinute}`;
    
            if (currentHour < 10 && currentMinute < 10){
                addedHour = `0${currentHour}:0${currentMinute}`;
            } else if (currentHour < 10){
                addedHour = `0${currentHour}:${currentMinute}`;
            } else if (currentMinute < 10) {
                addedHour = `${currentHour}:0${currentMinute}`;
            }
    
            return(addedHour);
          }
    
        React.useEffect(() => {
            const intervalId = setInterval(() => {
              setHora(hora => addMinute(hora));
            }, 60000)
    
            return () => clearInterval(intervalId);
        }, [])

      return {principalCities, city, setCity, hora, weather, searching, setSearching, possibleResults};
}

export {useWeather};