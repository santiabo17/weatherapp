function TodayData(props){
    return(
        <div className="h-2/3 w-1/3 mt-10 ml-3 fixed top-0 left-0 bg-red-100 box-border overflow-scroll">
            <h1 className="text-5xl text-center sticky top-0 mb-5 bg-blue-200 p-3">Today</h1>
            {props.children}
        </div>
    )
}

export {TodayData};