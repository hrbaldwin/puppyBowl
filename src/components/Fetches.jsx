import React from "react";

// const Fetches = () => {
export async function fetchPuppies () {
    try {
      const fetchedPuppies = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players');
      const puppies = await fetchedPuppies.json();
    } catch (err) {
      console.error(err);
    }
  }
  export async function singlePuppy () {
    try {
        let playerId = 7441
     const fetchOnePuppy = await fetch(`https://fsa-puppy-bowl.herokuapp. com/api/2209-FTB-ET-WEB-FT/players/${playerId}`)
        const puppyData = await fetchOnePuppy.json();
      const onePuppy = puppyData.data.player
      console.log(onePuppy)
    } catch (err) {
      console.error(err);
    }
  }
  export async function puppyTeam () {
    try {
     const fetchPuppyTeam = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/teams")
        const teamData = await fetchPuppyTeam.json();
      const puppyTeam = teamData.data
      console.log(puppyTeam)
    } catch (err) {
      console.error(err);
    }
  }
