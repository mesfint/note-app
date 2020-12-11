import React from 'react';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';

const Container = styled.div({
  height: '25vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px dashed #545454',
  fontSize: '3rem',
  transition: 'all 0.3s ease-in',
  cursor: 'pointer',

  '&:hover': {
    background: '#000',
    color: '#FFF',
    border: '1px dashed #FFF',
  },
});

export const AddNoteCard = ({ onModalOpen }) => {
  return (
    <div>
      <Container>
        <PlusCircleOutlined onClick={onModalOpen} />
      </Container>
    </div>
  );
};
