import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import BrandLoader from "../components/BrandLoader";
import { HOME_ROUTE } from "../contents-management/Landing";
import PagesRoutes from "../navigations/PagesRoutes";

import { LANDING_ROUTE } from "../urls/Routing";

const Home = lazy(() => import("../pages/Home"));
const Landing = lazy(() => import("../layout/Landing"));

const LandingRoutes = () => {
  return (
    <Suspense fallback={<BrandLoader />}>
      <Routes>
        <Route path={HOME_ROUTE}>
          <Route index element={<Home />} />
        </Route>
        <Route path={LANDING_ROUTE} element={<Landing />}>
          <Route index element={<Navigate to={`${LANDING_ROUTE}/home`} />} />
          <Route path={`${LANDING_ROUTE}/*`} element={<PagesRoutes />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default LandingRoutes;
