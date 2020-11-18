import "./App.css";
import AppHome from "./componets/home";

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="container-fluid">
      <Header className="site-page-header" />
      <Sider>Sider</Sider>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default App;
