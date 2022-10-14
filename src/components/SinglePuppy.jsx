import React, {useEffect, useState} from "react";
import {fetchOnePuppy, PuppyList} from "./" 


const SinglePuppy = () => {
    const [gotSinglePuppy, setGotSinglePuppy] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchOnePuppy();
        setGotSinglePuppy(data);
      };
  
      fetchData();
      // fetchPuppies().then((puppies) => {setGotPuppies(puppies)})
    }, []);
  
    return (
      <div id= "singlePuppy">
          <ul>{gotSinglePuppy.name}
          <li>ID: {gotSinglePuppy.id}</li>
          <li>Breed: {gotSinglePuppy.breed}</li>
          <li>Status: {gotSinglePuppy.status}</li>
          <li><ul>Team: {gotSinglePuppy.teamId}
          {gotSinglePuppy.team.map(()=> {
            return (
                <li>{gotSinglePuppy.team.name}</li>
            )
          })}
            </ul></li>
          </ul>
          <img className="puppyPic" src={gotSinglePuppy.imageUrl} />
    </div>
    );
  };
  
  export default SinglePuppy;
  