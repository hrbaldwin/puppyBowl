import React from "react";
import { fetchPuppies } from "./";
import {Link} from 'react-router-dom'

const PuppyList = (props) => {
  const gotPuppies = props.gotPuppies;
  const setGotPuppies = props.setGotPuppies;

  return (
    <div className="container">
      {gotPuppies.map((puppy, index) => {
        console.log(puppy.imageUrl);
        return (
          <div className="puppyCard" key={`puppy-${index}`}>
            <span id="puppyName">{puppy.name}</span> <span>#{puppy.id}</span>
            <img className="puppyPic" src={puppy.imageUrl} />
            <button><Link to={`${puppy.id}`}>See More Details</Link></button>
          </div>
        );
      })}
    </div>
  );
};

export default PuppyList;
