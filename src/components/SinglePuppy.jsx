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
          <ol>{gotSinglePuppy.name}
          <li>{gotSinglePuppy.id}</li>
          <li>{gotSinglePuppy.breed}</li>
          <li>{gotSinglePuppy.status}</li>
          <li><ol>{gotSinglePuppy.team}
          {gotSinglePuppy.team.map(()=> {
            return (
                <li>{gotSinglePuppy.team.name}</li>
            )
          })}
            </ol></li>
          </ol>
    </div>
    );
  };
  
  export default SinglePuppy;
  