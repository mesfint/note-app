import React, { useState } from 'react';
import './App.css';
import AppSearch from './componets/search';
import AppNote from './componets/notes';

import { Layout, Menu, Button, Modal, Input } from 'antd';
const { TextArea } = Input;
const { Header, Content, Footer } = Layout;

function App() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onOk = () => {
    setVisible(false);
  };
  const onCancle = () => {
    setVisible(false);
  };
  return (
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal">
          <Button type="primary" size="large" onClick={showModal}>
            +New note
          </Button>
        </Menu>
        <Modal
          title="Add note"
          visible={showModal}
          onClose={onClose}
          okText={'ADD'}
          onOk={onOk}
          onCancel={onCancle}
          visible={visible}
        >
          <TextArea rows={4} />
        </Modal>
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
