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
        <div className="bg-blue-300 bg-opacity-20 window-filter flex flex-row sm:flex-col items-center sm:items-stretch justify-between p-2 py-6 text-sm text-center rounded-xl mb-3 w-full h-20 sm:w-1/2 sm:h-auto lg:text-base">
            <p className="font-bold text-base sm:text-3xl mb-1 w-12 text-left sm:text-center sm:mb-3 sm:w-auto xl:mb-0">{dia}</p>
            <div className="flex items-center justify-between px-2 sm:px-5">
                <div className="w-5 sm:w-10 base:w-12 mx-0 mr-2">
                    <TemperatureIcon />
                </div>
                <div className="text-start sm:text-center">
                    <p className="text-sm sm:text-2xl">Min: <span className="text-sm sm:text-2xl">{Math.round(props.minTemp)}°C</span></p>
                    <p className="text-sm sm:text-2xl">Max: <span className="text-sm sm:text-2xl">{Math.round(props.maxTemp)}°C</span></p>
                </div> 
            </div>
            <div className="flex items-center justify-between px-2 sm:px-5">
                <div className="w-5 sm:w-10 base:w-8 mx-0 mr-2">
                    <WindIcon/>
                </div>
                <p className="text-sm sm:text-2xl">{props.wind} km/h</p>
            </div>
            
            <img className="w-10 h-10 sm:w-20 sm:h-20  sm:mx-auto" src={props.icon}/>
        </div>
    )
}

export {NextDaysDataCard}