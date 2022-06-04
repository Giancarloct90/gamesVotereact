// HOOKS
import { useState } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// UTILS
import { handleFormGame } from "../Data/dataEntity";
import { validateGames } from "../validate/validateGame";

// COMPONENTS
import ShowError from "./ShowError";

const GamesForm = ({ setFlag }) => {
  const [imgTxt, setImageTxt] = useState("");

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          descripcion: "",
          file1: "",
          imgText: "",
        }}
        validationSchema={validateGames}
        onSubmit={(values, { resetForm }) => {
          handleFormGame(values, resetForm, setFlag);
          setImageTxt("");
          // console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="gameForm">
            <h1 className="gameFormTitle">New Game</h1>
            <div className="formNombre">
              <label htmlFor="nombre">Nombre</label>
              <Field type="text" name="nombre" id="nombre" />
              <ErrorMessage name="nombre" component={ShowError} />
            </div>
            <div>
              <label htmlFor="descripcion">Descripcion</label>
              <Field
                as="textarea"
                cols="30"
                rows="7"
                name="descripcion"
                id="descripcion"
              />
              <ErrorMessage name="descripcion" component={ShowError} />
            </div>
            <div>
              <div className="inputFileCustom">
                <label htmlFor="file1">Picture</label>
                <input
                  hidden
                  type="file"
                  name="file1"
                  id="file1"
                  onChange={(e) => {
                    setFieldValue("file1", e.target.files[0]);
                    setImageTxt(e.target.files[0].name);
                    console.log("img loaded");
                  }}
                />
                <Field
                  type="text"
                  value={imgTxt}
                  readOnly
                  id="imgText"
                  name="imgText"
                  // disabled
                />
              </div>
              <ErrorMessage name="file1" component={ShowError} />
            </div>
            <input type="submit" className="btnAddGame" value={"ADD GAME"} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default GamesForm;
