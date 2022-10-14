import React, {useEffect, useState } from "react";
import {fetchOnePuppy, PuppyList} from "./" 
import {Link, useParams} from 'react-router-dom'
import { singlePuppy } from "./"
import {Navbar, Footer} from "./"


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
          <div className="main">
      <Navbar />
      <div id= "singlePuppy">
      {gotSinglePuppy.id ?
        <div id= "onePup"><div id= "buttonAndList"><button><Link to='/'>Go Back to All Puppies</Link></button>
          <ul><span id="doggyName">{gotSinglePuppy.name}</span>
          <li><b>ID: </b>{gotSinglePuppy.id}</li>
          <li><b>Breed: </b>{gotSinglePuppy.breed}</li>
          <li><b>Status: </b>{gotSinglePuppy.status}</li>
          <li><b>Team: </b>{gotSinglePuppy.team.name}<ul>
          {gotSinglePuppy.team.players.map((doggy)=> {
            return (
                <li key={`teammate-${doggy.id}`}>{doggy.name}</li>
            )
          })}
            </ul></li>
          </ul></div>
          <img id="pupPortrait" className="puppyPic" src={gotSinglePuppy.imageUrl} />
    </div>: <div>Retrieving your Retriever</div>}</div>
    <Footer />
    </div>
    );
  };
  
  export default SinglePuppy;
  