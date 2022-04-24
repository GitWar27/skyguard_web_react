import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

//**Routes import Guide */
// just import the index/Main file of the component/view
//e.g (../views/home) (../pages/contact)

const Home = lazy(() => import("../views/home"));
const About = lazy(() => import("../pages/about/About"));
const Careers = lazy(() => import("../pages/career/Career"));
const Clients = lazy(() => import("../pages/clients/Clients"));
const Security = lazy(() => import("../components/content/security"));

//** Routes guide */
// id ---> id of the routes anything is acceptable
// path ---> exact path/url of the page
// component ---> imported view/component to be viewed in the SPA
// exact ---> flag if the url path is exact as the path key. if false any character after the path key will be accepted

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
