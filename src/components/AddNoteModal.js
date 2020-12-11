import { useState } from 'react';
import { Modal, Input, Row, Col } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

const SpacingTop = styled.div({
  marginTop: '1rem',
});

export const AddNoteModal = ({ isOpen, onAddNote, onClose }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

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
    onAddNote(title, text);
    onClose();
    tearDown();
  };

  const handleClose = () => {
    onClose();
    tearDown();
  };

  return (
    <Modal
      visible={isOpen}
      title="Please type your note"
      onOk={handleOk}
      okText={'ADD'}
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
