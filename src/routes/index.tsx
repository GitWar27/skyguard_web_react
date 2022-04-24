import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../views/home"));
const About = lazy(() => import("../pages/about/About"));
const Careers = lazy(() => import("../pages/career/Career"));
const Clients = lazy(() => import("../pages/clients/Clients"));
const Security = lazy(() => import("../components/content/security"));

const routes: any = [
  {
    id: "/",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    id: "/about",
    path: "/about",
    component: About,
    exact: true,
  },
  {
    id: "/career",
    path: "/career",
    component: Careers,
    exact: true,
  },
  {
    id: "/clients",
    path: "/clients",
    component: Clients,
    exact: true,
  },
  {
    id: "/security",
    path: "/security",
    component: Security,
    exact: true,
  },
];

const AppRoutes = (props: any) => {
  return (
    <>
      <Suspense fallback={null}>
        <Switch>
          {routes.map((r: any) => (
            <Route key={r.id} exact component={r.component} path={r.path} />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRoutes;
