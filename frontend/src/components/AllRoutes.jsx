import React from "react";
import { Routes, Route } from "react-router-dom";
import { Landing } from "../pages/Landing";
import ErrorPage from "../pages/ErrorPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Landing />} />

        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </>
  );
};
