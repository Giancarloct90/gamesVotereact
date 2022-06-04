import React from "react";

// SOCKETS
import "../socket/socket";

// CUSTOM HOOKS
import useFetch from "../hooks/useFetch";

// COMPONENTS
import GameCard from "./GameCard";
import Title from "./Title";

const Vote = () => {
  const { data } = useFetch("http://localhost:4000/API/games");

  return (
    <>
      <Title title={"VOTE"} />
      {/* {data && console.log(data.gameDB)} */}
      <GameCard datas={data} btn={true} counter={false} />
    </>
  );
};

export default Vote;
