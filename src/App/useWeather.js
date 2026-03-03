import React from "react";

function useWeather () {

    const [city, setCity] = React.useState('Dolores UY');
    const [hora, setHora] = React.useState(null);
    const [weather, setWeather] = React.useState(null);
    const [searching, setSearching] = React.useState('');
    const [possibleResults, setPossibleResults] = React.useState(null);

    const principalCities = [
      { name: "Tokyo", country: "Japan", lat: 35.6895, lon: 139.6917, timezone: "Asia/Tokyo" },
      { name: "New York", country: "United States", lat: 40.7128, lon: -74.006, timezone: "America/New_York" },
      { name: "London", country: "United Kingdom", lat: 51.5074, lon: -0.1278, timezone: "Europe/London" },
      { name: "Dubai", country: "United Arab Emirates", lat: 25.2048, lon: 55.2708, timezone: "Asia/Dubai" },
      { name: "Madrid", country: "Spain", lat: 40.4168, lon: -3.7038, timezone: "Europe/Madrid" },
      { name: "Paris", country: "France", lat: 48.8566, lon: 2.3522, timezone: "Europe/Paris" },
      { name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093, timezone: "Australia/Sydney" },
      { name: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198, timezone: "Asia/Singapore" },
      { name: "Reykjavik", country: "Iceland", lat: 64.1355, lon: -21.8954, timezone: "Atlantic/Reykjavik" },
      { name: "Cairo", country: "Egypt", lat: 30.0444, lon: 31.2357, timezone: "Africa/Cairo" }
    ];
  
    React.useEffect(() => {
        fetch('https://api.weatherapi.com/v1/forecast.json?key=d567c41c86e947318de201221230709&q='+city+'&days=8')
        .then(response => response.json())
        .then(data => {
          setWeather(data);
          setHora(addMinute(data.location.localtime.substring(data.location.localtime.length-5, data.location.localtime.length)));
        })
      }, [city])
  
    React.useEffect(() => {
      if(searching?.length > 3){
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searching}&count=5&language=en&format=json`, {
          method: 'GET',
        })
        .then(response => response.json())
        .then(result => {
          setPossibleResults(result.results); 
        })
      } else {
        setPossibleResults(null)
      }
    }, [searching]);
  
    function addMinute(hora) {
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