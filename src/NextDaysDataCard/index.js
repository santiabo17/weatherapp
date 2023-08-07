import { TemperatureIcon } from "../Icons/TemperatureIcon";
import { WindIcon } from "../Icons/WindIcon";

function NextDaysDataCard (props) {
    const fecha = new Date(props.date);
    console.log(fecha.getDay());
    let dia;
    switch(fecha.getDay()){
        case 0: 
            dia = 'Lunes'
            break;
        case 1:
            dia = 'Martes'
            break;
        case 2: 
            dia = 'Miercoles'
            break;
        case 3:
            dia = 'Jueves'
            break;
        case 4: 
            dia = 'Viernes'
            break;
        case 5:
            dia = 'Sábado'
            break;
        case 6: 
            dia = 'Domingo'
            break;
    }
    return (
        <div className="bg-blue-300 bg-opacity-20 window-filter flex flex-row sm:flex-col items-center sm:items-stretch justify-between p-2 text-sm text-center rounded-xl mb-3 w-full h-20 sm:w-1/5 sm:h-auto lg:text-base">
            <p className="font-bold  text-base wri sm:text-lg mb-1 w-24 text-left sm:text-center sm:mb-3 sm:w-auto xl:mb-0">{dia}</p>
            <div className="flex items-center justify-between px-2 xl:block">
                <div className="w-8 sm:w-5 base:w-8 mx-0 xl:mx-auto">
                    <TemperatureIcon />
                </div>
                <div>
                    <p>Min: {Math.round(props.minTemp)}°C</p>
                    <p>Max: {Math.round(props.maxTemp)}°C</p>
                </div> 
            </div>
            <div className="flex items-center justify-between px-2 xl:block">
                <div className="w-8 sm:w-5 base:w-8 mx-0 xl:mx-auto ">
                    <WindIcon/>
                </div>
                <p>{props.wind} km/h</p>
            </div>
            
            <img className="w-20 h-20  sm:mx-auto" src={props.icon}/>
        </div>
    )
}

export {NextDaysDataCard}