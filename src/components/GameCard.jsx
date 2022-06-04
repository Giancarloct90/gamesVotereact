import React, { useEffect, useRef } from "react";

import { socket } from "../socket/socket";

const handleVote = (id) => {
  socket.emit("voted", { id });
};

const GameCard = ({ datas, btn, counter }) => {
  // HOOKS DEFITIONS
  const labelsVoted = useRef();

  useEffect(() => {
    socket.on("voted2", ({ id }) => {
      let elementGame = [];
      labelsVoted.current.childNodes.forEach((game) => {
        elementGame.push({ element: game.lastChild.lastChild });
      });
      let foundElement = elementGame.filter(
        (gamet) => gamet.element.id === id.id
      )[0].element;
      foundElement.textContent = parseInt(foundElement.textContent) + 1;
    });
  }, []);

  // COMPONENT
  return (
    <>
      <div ref={labelsVoted} className="divCardsGamesVote">
        {datas &&
          datas.gameDB.map((dat) => (
            <div className="CardGameVote" key={dat._id}>
              <div className="CardImage">
                <img src={dat.imagen} alt="" />
              </div>
              <div className="CardTitle">
                <p className="CardGameTitle">{dat.nombre}</p>
              </div>
              <div className="CardButton">
                {btn && (
                  <button
                    id={dat._id}
                    onClick={(e) => handleVote(e.target.id)}
                    className="btnCardGame"
                  >
                    Vote
                  </button>
                )}
                {counter && (
                  <>
                    <h1 style={{ fontSize: "2rem" }}>Votos</h1>
                    <label
                      style={{ fontSize: "2rem", fontWeigh: "900" }}
                      id={dat._id}
                      htmlFor=""
                    >
                      0
                    </label>
                  </>
                )}
                {}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default GameCard;
