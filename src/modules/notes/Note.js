import React from 'react';
import { Card, Modal, Popconfirm, message, Tooltip } from 'antd';
import styled from 'styled-components';

import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  button {
    /* font-weight: 500;
    font-size: 12px;
      text-align: center; */
    /* padding: 17px 10px;*/
    /*  margin: 10px 5px;*/
    margin: 4px 2px;

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
const redButton = {
  color: '#fff',
  backgroundColor: '#e74c3c',
  border: '1px solid grey',
};
const orangeButton = {
  color: '#000',
  backgroundColor: '#ffbe76',
  border: '1px solid grey',
};
const pinkButton = {
  color: '#424246',
  backgroundColor: '#ffc0cb',
  border: '1px solid grey',
};

export const Note = ({ note, deleteNote, onEditNote }) => {
  const [background, setBackground] = React.useState('#fff');
  const [fontColor, setFontColor] = React.useState('#000');

  const setStyle = (background, fontColor) => {
    setBackground(background);
    setFontColor(fontColor);
  };

  // Only run this  first time the component rendered
  //(first time when our comp runs we load exsiting data from LS)

  //This runs every time the state changes and the bgcolor saved into LS
  //fonts

  /*  React.useEffect(() => {
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
  }, []); */
  //and brings back to Browser
  /*   React.useEffect(() => {
    localStorage.setItem('bg_color', JSON.stringify(background));
  }, [background]);

  React.useEffect(() => {
    localStorage.setItem('fonts_color', JSON.stringify(fontColor));
  }, [fontColor]);
 */
  //This runs every time the state changes and the bgcolor saved into LS
  //and brings back to Browser
  /*   React.useEffect(() => {
    localStorage.setItem('fonts_color', JSON.stringify(font));
  }); */
  const handleDeleteNote = (id) => {
    //alert('Are you sure want to delete?');
    deleteNote(note.id);
  };

  const handleEditNote = () => {
    onEditNote(note);
  };

  function confirm(id) {
    deleteNote(note.id);
    /*  message.success('Click on Yes'); */
  }

  function cancel(e) {
    console.log(e);
    /* message.error('Click on No'); */
  }

  return (
    <>
      <Card
        style={{
          width: 300,
          height: 'auto',
          fontSize: '1rem',
          wordWrap: 'break-word',
          margin: '0',
          marginRight: '15px',
          background: `${background}`,
          color: `${fontColor}`,
        }}
      >
        <h3>{note.title}</h3>
        <p>{note.text}</p>

        <Popconfirm
          title="Are you sure to delete this note?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined
            style={{
              fontSize: '20px',
              height: '27px',
              width: '27px',
              borderRadius: '50%',
              border: '2px solid #000',
              color: '#000',
              marginLeft: '14rem',
            }}
          />
        </Popconfirm>
        <EditOutlined
          style={{
            fontSize: '20px',
            color: '#000',
            height: '27px',
            width: '27px',
            borderRadius: '50%',
            border: '2px solid #000',
            margin: '0.5rem 0 2rem 14rem',
            cursor: 'pointer',
          }}
          onClick={handleEditNote}
        />
      </Card>
      <Buttons>
        <div>
          <Tooltip title="High-Priority">
            <button
              className="color-info"
              onClick={() => {
                setStyle('#e74c3c', '#fff');
              }}
              style={redButton}
            ></button>
          </Tooltip>

          <Tooltip title="Medium-Priority">
            <button
              onClick={() => {
                setStyle('#ffbe76', '#000');
              }}
              style={orangeButton}
            ></button>
          </Tooltip>
          <Tooltip title="Low-Priority">
            <button
              onClick={() => {
                setStyle('#c0ffc1', '#424246');
              }}
              style={greenButton}
            ></button>
          </Tooltip>
          <Tooltip title="Normal">
            <button
              onClick={() => {
                setStyle('#ffc0cb', '#424246');
              }}
              style={pinkButton}
            ></button>
          </Tooltip>
        </div>
      </Buttons>
    </>
  );
};
