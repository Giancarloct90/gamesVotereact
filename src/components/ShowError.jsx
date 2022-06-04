import React from "react";

const ShowError = (props) => {
  return (
    <>
      <h4 className="erroMsj">{props.children}</h4>
    </>
  );
};

export default ShowError;
