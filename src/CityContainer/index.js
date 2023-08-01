function CityContainer (props) {
    return (
        <div className="bg-gray-800 w-full text-white flex px-8 gap-3 justify-center">
            {props.children}
        </div>
    )
}

export {CityContainer};
