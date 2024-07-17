function NextDaysData(props){
    return(
        <div className="h-2/3 w-11/12 mt-7 ml-0 px-1 sm:px-5 relative window_filter bg-blue-500 bg-opacity-10 overflow-hidden
                        lg:w-2/3 
                        2xl:fixed 2xl:top-0 2xl:right-0 2xl:mr-3 2xl:w-1/3"
        >
            <h1 className="text-5xl text-center p-3">Next Days</h1>
            <div className="block sm:flex gap-x-5 h-5/6 mt-4 p-0 sm:p-2 gap-2">
                {props.children}
            </div>
            
        </div>
    )
}

export {NextDaysData};