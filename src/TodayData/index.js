function TodayData(props){
    return(
        <div className=" w-11/12 mt-7 ml-3 window-filter bg-blue-500 bg-opacity-10 box-border relative overflow-visible
                        lg:w-2/3
                        2xl:fixed 2xl:top-0 2xl:left-0 2xl:overflow-auto 2xl:block 2xl:w-1/3 2xl:h-2/3"
        >
            <h1 className="text-5xl text-center relative mb-5 window-filter p-3 bg-opacity-0 2xl:bg-white 2xl:bg-opacity-10 
                        2xl:sticky 2xl:top-0"
            
            >
                Today
            </h1>
            <div className="h-48 flex overflow-auto pb-2 2xl:block 2xl:h-auto">
                {props.children}
            </div>
            
        </div>
    )
}

export {TodayData};