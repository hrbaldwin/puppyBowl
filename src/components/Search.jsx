import React, {useState} from "react";

const SearchBar = (props) => {
    const gotPuppies = props.gotPuppies //This is an array of objects that we will compare to the searchInput to produce results?
    const setSearchInput = props.setSearchInput

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
return (
    <div id = "searchBar">
    <input
    type="search"
    placeholder="Search here"
    onChange={handleChange} />
    <img id="lookingGlass" src= {require("./magnifier.webp")}></img>
    </div>
)
}
 export default SearchBar