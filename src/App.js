import React from "react";
import "./App.css";

import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">+New note</Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout">
        <div className="site-layout-background">Content</div>
      </Content>
      <Footer className="footer">MesfinT ©2020</Footer>
    </Layout>
  );
}

export default App;
