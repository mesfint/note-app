import React from 'react';
import { Layout as AntdLayout, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Text } = Typography;
const {
  Header: AntdHeader,
  Content: AntdContent,
  Footer: AntdFooter,
} = AntdLayout;

// As you can see, styled-components encapsulates styles on the component level, App.css is no longer needed
const Container = styled(AntdLayout)({
  minHeight: '100vh',
  background: '#FAFAFA',
});

const Header = styled(AntdHeader)({
  marginTop: '5rem',
  background: '#FAFAFA',
  textAlign: 'center',
});

const Content = styled(AntdContent)({
  padding: '0 5rem',
});

const Footer = styled(AntdFooter)({
  textAlign: 'center',
});

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Title>Notes App</Title>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <Text level={5}>Made with ❤️ &nbsp; by MesfinT ©2020 ✌️</Text>
      </Footer>
    </Container>
  );
};
