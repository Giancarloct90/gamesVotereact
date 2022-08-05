import React from "react";
import ReactDOM from "react-dom";
import { handleDeleteGame1 } from "../Data/dataEntity";

const DeleteDialog = ({
  deleteDialog,
  setDeleteDialog,
  deleteGame,
  setFlag,
  detailsGame,
  setdetailsGame,
}) => {
  // console.log(detailsGame);
  const handleDeleleGame = async (id) => {
    console.log(id);
    let res = await handleDeleteGame1(id);
    if (!res.ok) {
      return console.log("error", res.message);
    }
    setFlag((prevFlag) => (prevFlag += 1));
    setDeleteDialog(false);
    console.log(res);
  };
  return ReactDOM.createPortal(
    <>
      {deleteDialog && (
        <div className="fullScreenDelete">
          <div className="dialogDe">
            <h1 className="titleModal">
              Are you sure want to delete the game?
            </h1>
            <div className="divBtnsModal">
              <button
                className="btnModalDelete"
                onClick={() => handleDeleleGame(deleteGame)}
              >
                Delete
              </button>
              <button
                onClick={() => setDeleteDialog(false)}
                className="btnModalCancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {detailsGame && (
        <>
          <div className="fullScreenDelete">
            <div className="dialogDe">
              <p
                className="closeBtn"
                onClick={() => {
                  setdetailsGame(false);
                }}
              >
                X
              </p>
              <div className="divTitle">
                <h1 className="detailsTitle">{detailsGame.nombre}</h1>
              </div>
              <div className="detailsContent">
                <div className="divImgDeat ">
                  <img src={detailsGame.imagen} alt="" />
                </div>
                <div className="divText">
                  <p className="texto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laudantium distinctio pariatur perferendis sint odio
                    necessitatibus porro velit, quisquam, molestias totam
                    possimus reiciendis, odit dolorem enim libero sunt neque
                    culpa! Aliquid illum consequatur eligendi corrupti? Quos
                    itaque iste, nulla minus voluptas reiciendis, facere sit
                    repellendus ipsum ullam ut, assumenda soluta tenetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("portal")
  );
};

export default DeleteDialog;
