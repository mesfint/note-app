import React, { useState, useEffect } from 'react';
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

export const NoteList = ({
  notes,
  state,
  deleteNote,
  editNote,
  editingText,
  setEditingText,
  onEditNote,
}) => {
  const [filterNotes, setFilterNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');

    if (savedNotes) {
      state(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  });

  const COLORS = ['#e74c3c', '#ffbe76', '#c0ffc1', '#ffc0cb'];

  const ColorWrapper = styled.div(({ backgroundColor }) => ({
    marginRight: ' -7px',

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
            >
          </Col>
        ))}
      </Row>
    );
  };

  // Add some + icon and polish it up
  const noteAmountMessage = notes.length === 0 ? 'no' : notes.length;

  return (
    <>
      <div style={{ float: 'right' }}>
        Filter:
        {/*  <ColorSwitcher onColorSwitchClick={handleBackgroundColorSwitchClick} /> */}
      </div>
      <Container justify="center">
        <Col xs={24}>
          <CenteredText>You have {noteAmountMessage} notes .</CenteredText>
        </Col>
        <Col xs={24}>
          <CenteredText>
            Add one by using the ➕ &nbsp;button above.
          </CenteredText>
          <SpacingTop />
        </Col>

        <SpacingTop />

        {notes.map((note) => (
          <Row gutter={[16, 16]} key={note.id}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
              <Note
                note={note}
                id={note.id}
                deleteNote={deleteNote}
                editNote={editNote}
                onEditNote={onEditNote}
              />
            </Col>
          </Row>
        ))}
      </Container>
      <SpacingTop />
    </>
  );
};
