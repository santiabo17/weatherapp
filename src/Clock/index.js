function Clock(props) {
    const horabien = props.hour?.substring(props.hour?.length-5);
    return(
        <h1 className="text-8xl">{horabien}</h1>
    )
}

export {Clock};