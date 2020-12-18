import React, { useState, useEffect } from 'react';
import { Card, Modal, Popconfirm, message, Tooltip, Row, Col } from 'antd';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';

const COLORS = ['#e74c3c', '#ffbe76', '#c0ffc1', '#ffc0cb'];

const NoteWrapper = styled.div(({ backgroundColor }) => ({
  backgroundColor,
}));

const Button = styled.button`
  outline: none;
  border: none;
  background: none;
`;

const ColorWrapper = styled.div(({ backgroundColor }) => ({
  marginRight: ' -7px',
  borderRadius: '50%',
  height: '20px',
  width: '20px',
  border: '1px solid grey',
  backgroundColor,
  cursor: 'pointer',
}));

const Color = ({ backgroundColor }) => {
  return <ColorWrapper backgroundColor={backgroundColor} />;
};

const ColorSwitcher = ({ onColorSwitchClick }) => {
  return (
    <Row justify="center" gutter={10}>
      {COLORS.map((color) => (
        <Col key={color} onClick={() => onColorSwitchClick(color)}>
          <Color backgroundColor={color} />
        </Col>
      ))}
    </Row>
  );
};

export const Note = ({ note, deleteNote, onEditNote, id }) => {
  const [backgroundColor, setBackgroundColor] = useState(undefined);

  useEffect(() => {
    const backgroundColor = localStorage.getItem(`note-${id}-backgroundColor`);

    if (backgroundColor) {
      setBackgroundColor(backgroundColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(`note-${id}-backgroundColor`, backgroundColor);
  }, [backgroundColor]);

  const handleBackgroundColorSwitchClick = (backgroundColor) => {
    setBackgroundColor(backgroundColor);
  };

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
      <NoteWrapper backgroundColor={backgroundColor}>
        <Card
          className="card-style"
          title={note.title}
          style={{
            width: 315,
            height: 'auto',
            fontSize: '1rem',
            border: '1px solid #cdcdcd',
            borderRadius: '5px',
            wordWrap: 'break-word',
            margin: '0',
            marginRight: '15px',
            boxShadow: '0px 8px 25px -8px rgba(0,0,0,0.52)',
            background: `${backgroundColor}`,
          }}
        >
          <p style={{ fontSize: '14px' }}>{note.text}</p>
          <Tippy
            interactive={true}
            content={
              <ColorSwitcher
                onColorSwitchClick={handleBackgroundColorSwitchClick}
              />
            }
          >
            <Button>{<FontAwesomeIcon icon={faPalette} />}</Button>
          </Tippy>

          <Popconfirm
            title="Are you sure to delete this note?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <EditOutlined
              style={{
                fontSize: '20px',
                color: '#000',
                height: '23px',
                width: '23px',
                marginRight: '7px',
                borderRadius: '50%',

                cursor: 'pointer',
              }}
              onClick={handleEditNote}
            />
            <DeleteOutlined
              style={{
                fontSize: '20px',
                height: '23px',
                width: '23px',
                marginRight: '7px',
                borderRadius: '50%',

                color: '#000',
              }}
            />
          </Popconfirm>
        </Card>
      </NoteWrapper>
    </>
  );
};
