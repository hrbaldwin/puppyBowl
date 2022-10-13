import React from "react";
import {Navbar} from "./"
import {fetchPuppies} from "./"
import { singlePuppy } from "./";
import { puppyTeam } from "./";

const Main = () => {
  fetchPuppies();
 singlePuppy();
 puppyTeam();
  
  return (
    <div id="main">
      <Navbar />
  </div>
  );
};

export default Main;
