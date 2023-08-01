import { SearchIcon } from "../Icons/SearchIcon";

function CitySearch() {
    return(
        <div className="flex w-1/4  items-center my-6">
            <input placeholder="Que ciudad quires buscar?" className="bg-gray-300 p-2 w-full"/>
            <div className="w-10 h-10 cursor-pointer">
                <SearchIcon></SearchIcon>
            </div>
        </div>
        
    )
}

export {CitySearch};