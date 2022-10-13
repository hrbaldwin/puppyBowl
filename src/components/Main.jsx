import React, { useState, useEffect } from "react";
import { Navbar } from "./";
import { fetchPuppies } from "./";
// import { singlePuppy } from "./";
// import { puppyTeam } from "./";
import { PuppyList } from "./";
import { Footer } from "./";

const Main = () => {
  const [gotPuppies, setGotPuppies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPuppies();
      setGotPuppies(data);
    };

    fetchData();
    // fetchPuppies().then((puppies) => {setGotPuppies(puppies)})
  }, []);

  return (
    <div id="main">
      <Navbar />
      {gotPuppies ? (
        <PuppyList gotPuppies={gotPuppies} />
      ) : (
        <div>Loading...</div>
      )}
      <Footer />
    </div>
  );
};

export default Main;
