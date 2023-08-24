import React from "react";

function CityCard(props){
    
    const [cityData, setCityData] = React.useState(null)

    React.useEffect(() => {
        fetch('https://api.weatherapi.com/v1/current.json?key=c2b0baff920b421db8c140210230208&q='+props.name)
        .then(response => response.json())
        .then(data => setCityData(data))
      }, [])

      console.log(cityData);

    return(
        <div className=" bg-blue-300 bg-opacity-20 window-filter h-40 flex flex-col items-center rounded-xl justify-between cursor-pointer p-2"
        onClick={() => props.onCity()}
        >   
            <p className="w-20 md:w-40 flex justify-center">{cityData?.location.name}</p>
            <p>{cityData?.location.country}</p>
            <p>{cityData?.current.temp_c}°C</p>
            <p>{cityData?.current.wind_kph} km/h</p>
            <img className="w-12 h-12" src={cityData?.current.condition.icon}/>
            
        </div>
    )
}

export {CityCard}