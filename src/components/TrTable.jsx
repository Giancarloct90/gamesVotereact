import React from "react";
import { handleGameById } from "../Data/dataEntity";

const TableTR = ({ datas, setDeleteDialog, setDeleteGame, setdetailsGame }) => {
  return (
    <>
      {datas.map((data) => (
        <tr key={data._id}>
          <td>{data.nombre}</td>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
          <td className="actionBtns">
            <button
              // idGame={data.id}
              id={`${data._id}`}
              className="btnDeleteTable"
              onClick={(e) => {
                setDeleteDialog(true);
                setDeleteGame(e.target.id);
              }}
            >
              Delete
            </button>
            <button
              id={`${data._id}`}
              className="btnDeteails"
              onClick={async (e) => {
                let detailsGameJ = await handleGameById(e.target.id);
                setdetailsGame(detailsGameJ.gamesDB);
              }}
            >
              Deatils
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableTR;
