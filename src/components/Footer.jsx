import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div>
        <h2>Brought to you by:</h2>
      </div>
      <div>
        <p>Rebecca Baldwin and Alexa Mullin</p>
      </div>
      <div>
        <h2>Inspired by our puppies:</h2>
      </div>
      <div className="eachOfOurDogs">
        <div>Tucker</div>
        <img src={require("./Tucker.jpeg")} className="ourDogs" />
      </div>
      <div className="eachOfOurDogs">
        <div>Hiro</div>
        <img src={require("./Hiro.jpg")} className="ourDogs" />
      </div>
      <div className="eachOfOurDogs">
        <div>Bender</div>
        <img src={require("./Bender.jpg")} className="ourDogs" />
      </div>
    </div>
  );
};

export default Footer;
