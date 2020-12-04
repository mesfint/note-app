import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  button {
    font-weight: 500;
    font-size: 12px;
    color: red;
    text-align: center;
    /* padding: 17px 10px;*/
    margin: 10px 5px;
    margin-bottom: 20px;
    border-radius: 50%;
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
`;
const greenButton = {
  color: '#424246',
  backgroundColor: '#c0ffc1',
  border: '1px solid grey',
};
const purpleButton = {
  color: '#fff',
  backgroundColor: '#551a8b',
  border: '1px solid grey',
};
const orangeButton = {
  color: '#000',
  backgroundColor: '#ffa500',
  border: '1px solid grey',
};
const pinkButton = {
  color: '#424246',
  backgroundColor: '#ffc0cb',
  border: '1px solid grey',
};

export const Note = ({ note, deleteNote }) => {
  const [background, setBackground] = React.useState('#cdcdcd');
  const [font, setFont] = React.useState('#cdcdcd');
  const colors = [
    {
      green: '#c0ffc1',
      font1: '#424246',
    },
    {
      purple: '#551a8b',
      font2: '#fff',
    },
    {
      orange: '#ffa500',
      font3: '##000',
    },
    {
      pink: '#ffc0cb',
      font4: '#424246',
    },
  ];
  colors.map((color) => {
    console.log(color.pink);
    console.log(color.pink);
  });

  const setStyle = (background, font) => {
    setBackground(background);
    setFont(font);
  };

  // Only run this  first time the component rendered
  //(first time when our comp runs we load exsiting data from LS)

  //This runs every time the state changes and the bgcolor saved into LS
  //fonts

  React.useEffect(() => {
    const data1 = localStorage.getItem('bg_color');

    if (data1) {
      setBackground(JSON.parse(data1));
    }
  }, []);

  React.useEffect(() => {
    const data2 = localStorage.getItem('fonts_color');

    if (data2) {
      setBackground(JSON.parse(data2));
    }
  }, []);
  //and brings back to Browser
  React.useEffect(() => {
    localStorage.setItem('bg_color', JSON.stringify(background));
  }, [background]);

  React.useEffect(() => {
    localStorage.setItem('fonts_color', JSON.stringify(font));
  }, [font]);

  //This runs every time the state changes and the bgcolor saved into LS
  //and brings back to Browser
  /*   React.useEffect(() => {
    localStorage.setItem('fonts_color', JSON.stringify(font));
  }); */
  const handleDeleteNote = (id) => {
    deleteNote(note.id);
  };
  const handleColorChange = () => {
    setStyle();
  };
  return (
    <>
      <Card
        style={{
          width: 300,
          padding: '1rem',
          marginRight: '15px',
          background: `${background}`,
          color: `${font}`,
        }}
        cover={note.text}
        actions={[
          <DeleteOutlined key="delete" onClick={handleDeleteNote} />,
          <EditOutlined key="edit" />,
        ]}
      >
        <Buttons>
          <div>
            <button
              onClick={() => {
                setStyle('#c0ffc1', '#424246');
              }}
              style={greenButton}
            ></button>
            <button
              onClick={() => {
                setStyle('#551a8b', '#fff');
              }}
              style={purpleButton}
            ></button>
            <button
              onClick={() => {
                setStyle('#ffa500', '#000');
              }}
              style={orangeButton}
            ></button>
            <button
              onClick={() => {
                setStyle('#ffc0cb', '#424246');
              }}
              style={pinkButton}
            ></button>
          </div>
        </Buttons>
      </Card>
    </>
  );
};
