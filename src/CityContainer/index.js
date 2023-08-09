
function CityContainer (props) {
    return (
        <div className=" w-11/12  mt-7 overflow-auto relative lg:2/3 2xl:w-full 2xl:overflow-hidden 2xl:mt-0">
            <div className="overflow-auto md:overflow-hidden flex md:justify-center gap-3 md:flex-wrap my-3 text-white px-2 md:px-8 ">
                {props.children}
            </div>
        </div>
        // <div className=" w-2/3 mt-10 ml-3 window-filter bg-blue-500 bg-opacity-10 box-border relative overflow-visible
        //                 2xl:fixed 2xl:top-0 2xl:left-0 2xl:overflow-auto 2xl:block 2xl:w-1/3 2xl:h-2/3"
        // >
        //     <h1 className="text-5xl text-center relative mb-5 window-filter p-3 bg-white bg-opacity-10 
        //                 2xl:sticky 2xl:top-0"
            
        //     >
        //         Today
        //     </h1>
        //     <div className="h-48 flex overflow-auto 2xl:block 2xl:h-auto">
        //         {props.children}
        //     </div>
            
        // </div>
    )
}

export {CityContainer};
