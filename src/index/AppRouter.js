import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";

import Preloader from "components-shared/Preloader/Preloader";
import HomePage from "Pages/HomePage";

const Login = lazy(() => import("components/Login"));

export default function AppRouter() {
  return ( 
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path={routes.Login} element={<Login />} />
        <Route path={routes.HomePage} element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}
