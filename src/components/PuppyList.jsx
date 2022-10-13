import React from "react";
import { fetchPuppies } from "./";

const PuppyList = (props) => {
  const gotPuppies = props.gotPuppies;
  const setGotPuppies = props.setGotPuppies;

  return (
    <div className="container">
      {gotPuppies.map((puppy, index) => {
        console.log(puppy.imageUrl);
        return (
          <div className="puppyCard" key={`puppy-${index}`}>
            <span>{puppy.name}</span> <span>#{puppy.id}</span>
            <img className="puppyPic" src={puppy.imageUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default PuppyList;
