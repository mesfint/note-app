import React from 'react';
import { Row, Col, Typography } from 'antd';

import styled from 'styled-components';
import { Note } from './Note';

const { Text } = Typography;

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
// Also fix layout a little bit, add some box shadow, proper colors for text and background
// Check colors here e.g.: https://ant.design/docs/spec/colors#header

export const NoteList = ({ notes, deleteNote }) => {
  // There is a lot of duplication for edit/delete, please try to extract it, also it would make sense
  // to create a Note.js component to abstract Note logic/styling
  // and manage notes, adding, editing, deleting
  // In later sessions we will learn how to manage state easier

  // TODO Try to present empty state when there are no Notes
  // Add some + icon and polish it up
  /*   if (notes.length === 0) { */

  return (
    <>
      <Container justify="center">
        <Col xs={24}>
          <CenteredText>You have no notes yet.</CenteredText>
        </Col>
        <Col xs={24}>
          <CenteredText>
            Add one by using the ➕ &nbsp;button below.
          </CenteredText>
          <SpacingTop />
        </Col>

        <SpacingTop />

        {notes.map((note) => (
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
              <Note key={note.id} note={note} deleteNote={deleteNote} />
            </Col>
          </Row>
        ))}
      </Container>
      <SpacingTop />
    </>
  );
};
