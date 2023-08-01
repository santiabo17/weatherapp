function NextDaysData(props){
    return(
        <div className="h-2/3 w-1/3 mt-10 ml-3 fixed top-0 right-0 bg-red-100">
            <h1 className="text-5xl text-center">Next Days</h1>
            <div className="flex h-5/6 mt-4 p-2 gap-2">
                {props.children}
            </div>
            
        </div>
    )
}

export {NextDaysData};