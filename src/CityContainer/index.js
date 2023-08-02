function CityContainer (props) {
    return (
        <div className="w-full text-white flex px-8 gap-3 justify-center">
            {props.children}
        </div>
    )
}

export {CityContainer};
