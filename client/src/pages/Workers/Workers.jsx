import React, { useEffect } from "react";
import Header from "../../components/Header";
import RenderList from "../../components/RenderList";
// import * as style from "./Workers.module.scss";

function Workers({ getListWorkers }) {
  useEffect(() => {
    getListWorkers({ page: 1, limit: 10, fullName: "" });
  }, []);

  return (
    <>
      <Header />
      <RenderList />
    </>
  );
}

export default Workers;
