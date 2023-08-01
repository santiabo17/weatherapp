function CityCard(props){
    return(
        <div className="bg-green-300 h-24 w-40 flex flex-col items-center justify-center">
            <p>{props.name}</p>
            <p>{props.temperature}</p>
            
        </div>
    )
}

export {CityCard}