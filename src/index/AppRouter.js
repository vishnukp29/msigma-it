import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";

import Preloader from "components-shared/Preloader/Preloader";
import HomePage from "Pages/HomePage";
import LandDPage from "Pages/L&D/LandDPage";
import Blog from "Pages/Blog";

const Login = lazy(() => import("components/Login"));

export default function AppRouter() {
  return ( 
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path={routes.Login} element={<Login />} />
        <Route path={routes.HomePage} element={<HomePage />} />
        <Route path={routes.LandDPage} element={<LandDPage />} />
        <Route path={routes.Blog} element={<Blog />} />
      </Routes>
    </Suspense>
  );
}
