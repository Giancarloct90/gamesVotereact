// ASSETS
import load from "../asset/img/load.gif";
import searchLogo from "../asset/icon/search2.svg";
import React, { useState, useEffect } from "react";

// COMPONENTS
import TrTable from "./TrTable";
import DeleteDialog from "./DeleteDialog";

// HOOKS AND CUSTOMS HOOKS
import useFetch from "../hooks/useFetch.js";

import { handleSearch, URL_API } from "../Data/dataEntity";

const GamesTable = ({ flag, setFlag }) => {
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [updateDialog, setUpdateDialog] = useState(false);
  const [deleteGame, setDeleteGame] = useState("");
  const [detailsGame, setdetailsGame] = useState();
  const [searchTxt, setSearchText] = useState("");
  const [games, setGames] = useState();
  const [stack, setStack] = useState(0);

  const { data, loading, erro } = useFetch(`${URL_API}API/games`, flag);

  useEffect(() => {
    setGames(data);
  }, [data, stack]);

  return (
    <>
      <div className="gameTables">
        <h1 className="gameFormTitle">Games Tables {flag}</h1>
        <div className="inputSearch">
          <input
            placeholder={"Search a Game"}
            type="text"
            value={searchTxt}
            onChange={(e) => {
              if (e.target.value === "") {
                setStack((prevStack) => (prevStack += 1));
              }
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btnSearch"
            onClick={() => handleSearch(data.gameDB, searchTxt, setGames)}
          >
            <img src={searchLogo} alt="" />
          </button>
        </div>

        <div className="divTable">
          <table className="tableGame">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {games && (
                <TrTable
                  datas={games.gameDB}
                  setDeleteDialog={setDeleteDialog}
                  setDeleteGame={setDeleteGame}
                  setUpdateDialog={setUpdateDialog}
                  setdetailsGame={setdetailsGame}
                />
              )}
            </tbody>
          </table>
          {erro && <h1 className="h1Error">Error to connnect server</h1>}
        </div>

        {loading && (
          <div className="imgLoading">
            <img src={load} alt="" />
          </div>
        )}
      </div>
      <DeleteDialog
        deleteDialog={deleteDialog}
        setDeleteDialog={setDeleteDialog}
        deleteGame={deleteGame}
        setFlag={setFlag}
        updateDialog={updateDialog}
        detailsGame={detailsGame}
        setdetailsGame={setdetailsGame}
      />
    </>
  );
};

export default GamesTable;
