import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('../components/content/security'));

const routes:any = [{
    id: '/',
    path: '/',
    component: Home,
    exact: true,
  }]

const AppRoutes = (props:any) => {

    return (
        <>
            <Suspense fallback={null}>
                <Routes>
                    {routes.map((r:any) => (
                <Route key={r.id}  element={r.component} path={r.path} />
                ))}
            </Routes>
            </Suspense>
        </>
    );
  };

export default AppRoutes