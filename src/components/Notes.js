import React, { useState } from 'react';
import { List, Card, Modal, Input, Row, Col, Typography, Space } from 'antd';
import styled from 'styled-components';

import { NotesSearch } from './NotesSearch';
import { AddNoteCard } from './AddNoteCard';

const { Text } = Typography;
const { TextArea } = Input;

const Container = styled(Row)({
  marginTop: '2rem',
});

const CenteredText = styled(Text)({
  display: 'block',
  textAlign: 'center',
});

const SpacingTop = styled.div({
  marginTop: '1rem',
});

// It's overcomplicated, just create a component like "ColorPicker"
// And have some constant colors defined (always the same)
// Allow user to choose the color while creating a note
// Don't generate as it's not needed, colors should be picked by users while they create notes
// Also fix layout a little bit, add some box shadow, proper colors for text and background
// Check colors here e.g.: https://ant.design/docs/spec/colors#header
function generatecolor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/* console.log(GenerateRandomColor());
 */

export const Notes = () => {
  const [visible, setVisible] = useState(false);
  const [notes, setNotes] = useState([]);

  const showModal = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onOk = () => {
    setVisible(false);
  };
  const onCancel = () => {
    setVisible(false);
  };
  // There is a lot of duplication for edit/delete, please try to extract it, also it would make sense
  // to create a Note.js component to abstract Note logic/styling
  // Here you could have useState with const [notes, setNotes] = useState([])
  // and manage notes, adding, editing, deleting
  // In later sessions we will learn how to manage state easier
  const data = [
    {
      title: 'Startup meeting',
      content:
        'Learn about the cloud, including the history, building blocks, and types on your way to becoming a Cloud Administrator.',
      edit: (
        <a href="#">
          <i onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i></i>
        </a>
      ),
    },
    {
      title: 'Bootcamp Practice',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i></i>
        </a>
      ),
    },
    {
      title: 'Code war practice',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i></i>
        </a>
      ),
    },
    {
      title: 'Mentorship meeting',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i></i>
        </a>
      ),
    },
    {
      title: 'Design Figma wireframes',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i></i>
        </a>
      ),
    },
    {
      title: 'Finish projects',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i></i>
        </a>
      ),
    },
  ];

  // TODO Try to present empty state when there are no Notes
  // Add some + icon and polish it up
  if (notes.length === 0) {
    return (
      <Container justify="center">
        <Col xs={24}>
          <CenteredText>You have no notes yet.</CenteredText>
        </Col>
        <Col xs={24}>
          <CenteredText>
            Add one by using the ➕ &nbsp;button below.
          </CenteredText>
        </Col>
        <Col xs={6}>
          <SpacingTop />
          <AddNoteCard />
        </Col>
      </Container>
    );
  }

  return (
    <Row justify="center" gutter={[32, 40]}>
      <Col xs={20}>
        <NotesSearch />
      </Col>
      <Col xs={6}>
        <div>Note 1</div>
      </Col>
      <Col xs={6}>
        <div>Note 2</div>
      </Col>
      <Col xs={6}>
        <AddNoteCard />
      </Col>
    </Row>
  );

  // TODO refactor a bit
  // Extract Components
  return (
    <div>
      <List
        grid={{
          gutter: 24,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 3,
          xxl: 3,
        }}
        dataSource={data}
        // Extract to Note.js as a semantic component
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{ backgroundColor: generatecolor() }}
              title={item.title}
            >
              {item.content}
              <div>
                <div>{item.edit}</div>
                <div>{item.delete}</div>
              </div>
            </Card>
            <Modal
              title="Edit note"
              visible={showModal}
              onClose={onClose}
              okText={'EDIT'}
              onOk={onOk}
              onCancel={onCancel}
              visible={visible}
            >
              <TextArea rows={4} />
            </Modal>
          </List.Item>
        )}
      />
    </div>
  );
};
