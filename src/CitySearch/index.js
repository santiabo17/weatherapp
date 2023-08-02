import { SearchIcon } from "../Icons/SearchIcon";

function CitySearch(props) {

    return(
        <div className="realative w-1/4">
            <div className="flex w-full  items-center mt-3">
                <input placeholder="Que ciudad quires buscar?" className="bg-white bg-opacity-10 window-filter p-2 w-full"
                onChange={(event) => props.setSearching(event.target.value)}
                />
                <div 
                    className="w-10 h-10 cursor-pointer"
                    onClick={() => props.setCity(props.searching)}
                >
                    <SearchIcon></SearchIcon>
                </div>
            </div>
            <div className="bg-gray-300 w-1/4 position absolute z-10">
                {props.possibleResults?.map((result) => {
                    return <h1>{result.name} {result.country}</h1>
                })}
            </div>
        </div>
        
        
    )
}

export {CitySearch};