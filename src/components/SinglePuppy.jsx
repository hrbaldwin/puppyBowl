import React, {useEffect, useState } from "react";
import {fetchOnePuppy, PuppyList} from "./" 
import {Link, useParams} from 'react-router-dom'
import { singlePuppy } from "./"


const SinglePuppy = () => {
    const [gotSinglePuppy, setGotSinglePuppy] = useState({});
    const {id} = useParams()
    useEffect(() => {
      const fetchData = async () => {
        const data = await singlePuppy(id);
        setGotSinglePuppy(data);
      };
  
      fetchData();
      // fetchPuppies().then((puppies) => {setGotPuppies(puppies)})
    }, []);
  
    return (
      <div id= "singlePuppy">
      {gotSinglePuppy.id ?
        <div><button><Link to='/'>Go Back to All Puppies</Link></button>
          <ul>{gotSinglePuppy.name}
          <li>ID: {gotSinglePuppy.id}</li>
          <li>Breed: {gotSinglePuppy.breed}</li>
          <li>Status: {gotSinglePuppy.status}</li>
          <li>Team: {gotSinglePuppy.team.name}<ul>
          {gotSinglePuppy.team.players.map((doggy)=> {
            return (
                <li>{doggy.name}</li>
            )
          })}
            </ul></li>
          </ul>
          <img className="puppyPic" src={gotSinglePuppy.imageUrl} />
    </div>: <div>Retrieving your Retriever</div>}</div>
    );
  };
  
  export default SinglePuppy;
  