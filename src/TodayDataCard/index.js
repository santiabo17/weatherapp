function TodayDataCard (props) {
    const horabien = props.hour?.substring(props.hour?.length-5);
    return (
        <div className="bg-blue-300 bg-opacity-20 window-filter mb-0 flex flex-col h-36 justify-between items-center p-2 text-xl rounded-xl mx-2 2xl:h-auto  2xl:mb-3 2xl:flex-row">
            <p className="w-14 text-center text-base lg:text-lg lg:w-20">{horabien} {window.innerWidth > 720 && ''}</p>
            <p className="text-base lg:text-lg">{props.temperature} °C</p>
            <img className=" w-14 h-14" src={props.icon}/>
        </div>
    )
}

export {TodayDataCard}