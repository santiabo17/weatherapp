import { SearchIcon } from "../Icons/SearchIcon";

function CitySearch(props) {

    function search (city) {
        props.setCity(city);
        props.setSearching('')
    }

    return(
        <div className="realative w-2/3 mt-4 mb-5 2xl:mt-3 2xl:mb-2 md:w-2/4 2xl:w-1/4">
            <div className="flex w-full  items-center">
                <input placeholder="Que ciudad quires buscar?" className="bg-white bg-opacity-10 window-filter p-2 w-full"
                value={props.searching}
                onChange={(event) => props.setSearching(event.target.value)}
                />
                <div 
                    className="w-10 h-10 cursor-pointer"
                    onClick={() => search(props.searching)}
                >
                    <SearchIcon></SearchIcon>
                </div>
            </div>
            <div className="bg-blue-800 bg-opacity-80 window-filter w-2/3 2xl:w-1/4 position absolute z-10 gap-2">
                {props.possibleResults?.map((result) => {
                    return (
                        <div 
                            className="mb-2 bg-white text-black flex justify-between px-3 py-1 cursor-pointer"
                            onClick={() => search(result.name + ' ' + result.country)
                            }
                        >
                            <span>{result.name.substring(0, 30)}{result.name.length > 30 && '...'}</span>
                            <span>{result.country}</span> 
                        </div>
                    )
                })}
            </div>
        </div>
        
        
    )
}

export {CitySearch};