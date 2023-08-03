import React from "react";

function Clock(props) {
    // const [hora, setHora] = React.useState(props.hour);

    // let currentHour = parseInt(props.hour?.substring(props.hour?.length-5, props.hour?.length-3));
    // let currentMinute = parseInt(props.hour?.substring(props.hour?.length-2, props.hour?.length));

    // // let currentHour = parseInt('00');
    // // let currentMinute = parseInt('00');

    // function addMinute (horario) {
    //     let addedHour;

    //     if(currentMinute != 59){
    //         currentMinute += 1;
    //     } else {
    //         currentMinute = 0;
    //         currentHour += 1;
    //     }
    //     if (currentHour < 10 && currentMinute < 10){
    //         addedHour = `0${currentHour}:0${currentMinute}`;
    //     } else if (currentHour < 10){
    //         addedHour = `0${currentHour}:${currentMinute}`;
    //     } else if (currentMinute < 10) {
    //         addedHour = `${currentHour}:0${currentMinute}`;
    //     }

    //     setHora(addedHour);
    // }



    // React.useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       addMinute();
    //     }, 1000)
    
    //     return () => clearInterval(intervalId);
    // }, [])
    
    return(
        <h1 className="text-7xl">{props.hour}</h1>
    )
}

export {Clock};