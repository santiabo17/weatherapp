import React from "react";

function CityCard(props){
    
    const [cityData, setCityData] = React.useState(null)

    React.useEffect(() => {
        fetch('http://api.weatherapi.com/v1/current.json?key=c2b0baff920b421db8c140210230208&q='+props.name)
        .then(response => response.json())
        .then(data => setCityData(data))
      }, [])

      console.log(cityData);

    return(
        <div className="bg-green-300 h-40 w-40 flex flex-col items-center justify-center cursor-pointer"
        onClick={() => props.onCity()}
        >
            <p>{cityData?.location.name}</p>
            <p>{cityData?.location.country}</p>
            <p>{cityData?.current.temp_c}</p>
            <p>{cityData?.current.wind_kph}</p>
            <img src={cityData?.current.condition.icon}/>
            
        </div>
    )
}

export {CityCard}