import React from 'react'; 
import { fetchPuppies } from "./";

const PuppyList = (props) => {
    const gotPuppies = props.gotPuppies
  const setGotPuppies = props.setGotPuppies


  return <div className="container">
    <div>{gotPuppies.map((puppy, index) => {console.log(puppy)})}</div>
 </div>


}

export default PuppyList