import React from "react";
import "./App.css";
import AppSearch from "./componets/search";
import AppNote from "./componets/notes";

import { Layout, Menu, Button } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal">
          <Button type="primary" size="large">
            +New note
          </Button>
        </Menu>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background">
          <AppNote />
        </div>
      </Content>
      <Footer className="footer">MesfinT ©2020</Footer>
    </Layout>
  );
}

export default App;
