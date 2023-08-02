function SelectedCity(props) {
    return (
        <div className="bg-gray-200 h-48 w-1/4 flex flex-col items-center justify-center m-6 relative">
            <p className="mb-2 text-lg">{props.name}, {props.region}</p>
            <p className="text-4xl mb-2 font-medium">{props.temperature} C {props.wind} kph</p>
            <p className="text-xl font-light font-normal mb-8">{props.condition}</p>
            <img className=" absolute bottom-0 " src={props.icon}></img>
        </div>
    )
}

export {SelectedCity}