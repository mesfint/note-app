import React, { useState } from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  width: 500px;
  height: 250px;
  padding: 40px 40px 20px 40px;
  background-color: #cdcdcd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  h2 {
    font-family: 'Abril Fatface', cursive;
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 10px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const NotesModal = ({ showModal, setSHowModal }) => {
  return (
    <>
      {showModal ? (
        <Background>
          <ModalWrapper></ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
