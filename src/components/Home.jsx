// LIBRARIES
import { useState } from "react";
import React from "react";

// COMPONENTS
import GamesTable from "./GamesTable";
import GamesForm from "./GamesForm";
import Title from "./Title";

const Home = () => {
  const [flag, setFlag] = useState(0);

  return (
    <>
      <Title title={"HOME"} />

      <div className="home">
        <GamesForm setFlag={setFlag} />
        <GamesTable flag={flag} setFlag={setFlag} />
        {/* <GamesForm />
        <GamesTable /> */}
      </div>
    </>
  );
};

export default Home;
