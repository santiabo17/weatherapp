function SelectedCity(props) {
    return (
        <div className="bg-green-300 h-48 w-1/4 flex flex-col items-center justify-center m-6">
            <p>{props.name}</p>
            <p>{props.region}</p>
            <p>{props.temperature}</p>
            <p>{props.condition}</p>
            <img src={props.icon}></img>
        </div>
    )
}

export {SelectedCity}