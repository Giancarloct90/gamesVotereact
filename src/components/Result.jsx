// LIBRARIES
import React from "react";

// COMPONENTS
import GameCard from "./GameCard";
import Title from "./Title";

// HOOKS
import useFetch from "../hooks/useFetch";

const Result = () => {
  const { data } = useFetch("http://localhost:4000/API/games");

  return (
    <>
      <Title title={"RESULT"} />
      <GameCard datas={data} btn={false} counter={true} />
    </>
  );
};

export default Result;
