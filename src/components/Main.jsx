import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { fetchPuppies } from "./";
// import { singlePuppy } from "./";
// import { puppyTeam } from "./";
import { PuppyList } from "./";
import { Footer } from "./";
import {Link} from 'react-router-dom';
import {SearchBar} from './'

const Main = () => {
  const [gotPuppies, setGotPuppies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPuppies();
      setGotPuppies(data);
    };

    fetchData();
    // fetchPuppies().then((puppies) => {setGotPuppies(puppies)})
  }, []);

  function filterPuppyData() {
    if (!searchInput){
      return gotPuppies
    } else{
    let filteredPuppies = gotPuppies.filter((puppy)=>{
      return puppy.name.toLowerCase() === searchInput.toLowerCase()
    })
    return filteredPuppies
  }};

  return (
    <div className="main">
      <Navbar />
      <SearchBar gotPuppies={gotPuppies} setSearchInput={setSearchInput}/>
      {gotPuppies ? (
        <PuppyList gotPuppies={filterPuppyData()} />
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </div>
  );
};

export default Main;

