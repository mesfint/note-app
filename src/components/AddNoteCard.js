import React, { useState } from 'react';
import { Notes } from '../modules/notes';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';
import { NotesModal } from './NotesModal';

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

/* Modal styles */

// Add icons package from ant https://ant.design/components/icon/
// and use some neat icon
export const AddNoteCard = () => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState();
  const [input, setInput] = useState('');
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Startup meeting',
      content:
        'Learn about the cloud, including the history, building blocks, and types on your way to becoming a Cloud Administrator.',
    },
    {
      id: 2,
      title: 'Bootcamp Practice',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
    },
    {
      id: 3,
      title: 'Code war practice',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
    },
  ]);

  /*   const openModal = () => {
    setShowModal((prev) => !prev);
  }; */

  const showModal = () => {
    setVisible(true);
  };

  const handleNoteSubmit = () => {
    setNotes((notes) =>
      notes.concat({ title, desc: input, id: notes.length + 1 })
    );
    setVisible(false);
  };
  console.log(notes);

  const handleCancel = (e) => {
    setVisible(false);
  };

  function genetrateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  return (
    <div>
      <Container>
        <PlusCircleOutlined onClick={showModal} />
        <Modal
          visible={visible}
          setVisible={setVisible}
          title=" Please type your note"
          visible={visible}
          onOk={handleNoteSubmit}
          okText={'ADD'}
          onCancel={handleCancel}
        >
          <TextArea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={'Title'}
            rows={1}
          />
          <SpacingTop />
          <TextArea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={'Please type your note'}
            rows={4}
          />
        </Modal>
        <Notes title={setTitle} notes={setNotes} />
      </Container>
    </div>
  );
};
