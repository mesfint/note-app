import "./App.css";
import AppHome from "./componets/home";

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <div className="container-fluid">
        <Header>Header</Header>
        <Sider>Sider</Sider>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </div>
    </Layout>
  );
}

export default App;
