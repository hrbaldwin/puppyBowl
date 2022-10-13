import React from "react";
import {Navbar} from "./"

const Main = () => {
  
async function fetchPuppies () {
  try {
    let playerId = 7441
    const fetchedPuppies = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players');
    const puppies = await fetchedPuppies.json();
    const fetchOnePuppy = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players/${playerId}`)
        const puppyData = await fetchOnePuppy.json();
    const onePuppy = puppyData.data.player
  } catch (err) {
    console.error(err);
  }
}
fetchPuppies() 


  
  
  
  return (
    <div id="main">
      <Navbar />
  </div>
  );
};

export default Main;
