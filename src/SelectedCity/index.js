import './SelectedCity.css'
import { TemperatureIcon } from '../Icons/TemperatureIcon';
import { WindIcon } from '../Icons/WindIcon.js';

function SelectedCity(props) {
    return (
        <div className="bg-gray-200 window-filter h-60 w-2/3 md:w-1/2 flex flex-col items-center justify-center mt-3 mb-1 relative contenedor lg:w-1/4">
            <p className="text-lg">{props.name}, {props.region}</p>
            <p className='mb-2'>{props.country}</p>
            <div className='flex gap-2'>
                <div className='w-10'>
                    <TemperatureIcon/>
                </div>
                <span className="text-4xl mb-2 font-medium ">{props.temperature} °C </span>
            </div>
            <div className='flex gap-2'>
                <div className='w-10'>
                   <WindIcon/>
                </div>
                <span className="text-4xl mb-2 font-medium">{props.wind} km/h</span>
            </div>
            
            
            <div className='flex items-center gap-2 '>
                <span className="text-xl font-normal ">{props.condition}</span>
                <img className="w-15" src={props.icon}></img>
            </div>
            
        </div>
    )
}

export {SelectedCity}