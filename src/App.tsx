import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { withRouter } from "react-router-dom";

import { Layout } from "antd";
import { Navbar, Footers } from "./components";

import Routes from "./routes";

const { Header, Content, Footer } = Layout;

const App = (props: any) => {
  return (
    <Layout className="mainLayout">
      <Header>
        <Navbar />
      </Header>
      <Content>
        <Routes />
      </Content>
      <Footer>
        <Footers />
      </Footer>
    </Layout>
  );
};

export default withRouter(App);
