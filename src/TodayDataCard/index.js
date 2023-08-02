function TodayDataCard (props) {
    const horabien = props.hour?.substring(props.hour?.length-5);
    return (
        <div className="bg-green-400 flex justify-between items-center p-2 text-xl rounded-xl mb-3">
            <p>{horabien}</p>
            <p>{props.temperature} C</p>
            <img className="bg-red-100 w-14 h-14" src={props.icon}/>
        </div>
    )
}

export {TodayDataCard}