import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import * as ContentMgtURL from "../urls/Routing";

const Repos = lazy(() =>
    import("../pages/Repos")
);


const PagesRoutes = () => {
  return (
    <Routes>
      <Route
        path={ContentMgtURL.REPO_ROUTE}
        element={<Repos />}
      />
    </Routes>
  );
};

export default PagesRoutes;
