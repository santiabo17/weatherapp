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
        <div className="bg-green-400 flex flex-col p-2 text-base text-center rounded-xl mb-3 w-1/5">
            <p className="font-bold text-xl">{dia}</p>
            <p>Min: {props.minTemp}</p>
            <p>Max: {props.maxTemp}</p>
            <img className="w-20 h-20" src={props.icon}/>
            <p>27 km/h</p>
        </div>
    )
}

export {NextDaysDataCard}