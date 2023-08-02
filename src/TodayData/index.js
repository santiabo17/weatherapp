function TodayData(props){
    return(
        <div className="h-2/3 w-1/3 mt-10 ml-3 fixed top-0 left-0 window-filter bg-blue-500 bg-opacity-10 box-border overflow-auto">
            <h1 className="text-5xl text-center sticky top-0 mb-5 window-filter p-3 bg-white bg-opacity-10">Today</h1>
            {props.children}
        </div>
    )
}

export {TodayData};