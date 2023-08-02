function TodayDataCard (props) {
    const horabien = props.hour?.substring(props.hour?.length-5);
    return (
        <div className="bg-blue-300 bg-opacity-20 window-filter flex justify-between items-center p-2 text-xl rounded-xl mb-3">
            <p>{horabien} hs</p>
            <p>{props.temperature} °C</p>
            <img className=" w-14 h-14" src={props.icon}/>
        </div>
    )
}

export {TodayDataCard}