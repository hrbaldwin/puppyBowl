import React, {useState} from "react";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
return (
    <div id = "searchBar">
    <input
    type="search"
    placeholder="Search here"
    onChange={handleChange}
    value= {searchInput} />
    <img id="lookingGlass" src= {require("./magnifier.webp")}></img>
    </div>
)
}
 export default SearchBar