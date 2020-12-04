import React from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';

import {
  List,
  Card,
  Modal,
  Input,
  Row,
  Col,
  Typography,
  Space,
  Button,
} from 'antd';
import { NoteList } from '../modules/notes/NoteList';
import { Note } from '../modules/notes/Note';

const { TextArea } = Input;

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
const SpacingTop = styled.div({
  marginTop: '1rem',
});

// Add icons package from ant https://ant.design/components/icon/
// and use some neat icon
export const AddNoteCard = ({ addNote }) => {
  const [visible, setVisible] = React.useState(false);
  const [note, setNote] = React.useState({
    id: '',
    text: '',
  });

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const handleNoteSubmit = (event) => {
    event.preventDefault();
    if (note.text.trim()) {
      addNote({ ...note, id: uuid() });

      //reset input
      setNote({ ...note, text: '' });
    }
    setVisible(false);
  };
  const handleNoteInputChange = (event) => {
    setNote({ ...note, text: event.target.value });
  };

  return (
    <div>
      <Container>
        <PlusCircleOutlined onClick={showModal} />
        <Modal
          visible={visible}
          setVisible={setVisible}
          title=" Please type your note"
          onOk={handleNoteSubmit}
          okText={'ADD'}
          onCancel={handleCancel}
        >
          <SpacingTop />
          <form onSubmit={handleNoteSubmit}>
            <TextArea
              type="text"
              name="note"
              value={note.text}
              onChange={handleNoteInputChange}
              placeholder="Please type your note"
              rows={4}
            />
          </form>
        </Modal>
      </Container>
    </div>
  );
};
