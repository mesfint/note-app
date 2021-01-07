import { useState, useEffect } from 'react';
import { Modal, Input, Row, Col } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

const SpacingTop = styled.div({
  marginTop: '1rem',
});

export const EditNoteModal = ({ note, isOpen, onEditNote, onClose }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setText(note.text);
    }
  }, [note]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  //Clear inputs
  const tearDown = () => {
    setTitle('');
    setText('');
  };

  const handleOk = () => {
    onEditNote({ ...note, title, text });
    onClose();
    tearDown();
  };

  const handleClose = () => {
    onClose();
    tearDown();
  };

  if (!note) {
    return null;
  }

  return (
    <Modal
      visible={isOpen}
      title="Please edit your note"
      onOk={handleOk}
      okText={'SAVE'}
      onCancel={handleClose}
    >
      <SpacingTop />
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Please type note title"
          />
        </Col>
        <Col span={24}>
          <TextArea
            type="text"
            name="note"
            value={text}
            onChange={handleTextChange}
            placeholder="Please type note text"
            rows={4}
          />
        </Col>
      </Row>
    </Modal>
  );
};
