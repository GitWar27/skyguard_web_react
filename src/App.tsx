import React from 'react';
import './App.css';
import 'antd/dist/antd.min.css'

import { Layout } from 'antd';
import { Navbar, Footers } from './components';
import AppHome from './views/home';


const { Header, Content, Footer } = Layout;


const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <Navbar />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <Footers />  
      </Footer> 
    </Layout>
  )
}

export default App
