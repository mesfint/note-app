import { Row, Col, Typography } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';

import { Note } from './Note';
import styled from 'styled-components';

const { Text } = Typography;

const Container = styled(Row)({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  marginTop: '2rem',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const CenteredText = styled(Text)({
  display: 'block',
  textAlign: 'center',
});

const SpacingTop = styled.div({
  marginTop: '1rem',
});

// Check colors here e.g.: https://ant.design/docs/spec/colors#header

export const NoteList = ({
  notes,
  state,
  deleteNote,
  editNote,
  editingText,
  setEditingText,
  onEditNote,
  displayNotes,
}) => {
  const [filterNotes, setFilterNotes] = useState([]);

  let isFilter = localStorage.getItem('isFilter')
    ? JSON.parse(localStorage.getItem('isFilter'))
    : false;
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes && !isFilter) {
      state(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    if (!isFilter) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  });
  localStorage.setItem('isFilter', false);

  const COLORS = ['#e74c3c', '#ffbe76', '#c0ffc1', '#ffc0cb'];

  const ColorWrapper = styled.div(({ backgroundColor }) => ({
    display: 'flex',
    height: '20px',
    width: '20px',
    border: '1px solid grey',
    backgroundColor,
    cursor: 'pointer',
  }));
  const DisplayAllButton = styled.div(() => ({
    display: 'flex',
    height: 'auto',
    paddingBottom: '2px',
    border: '1px solid grey',

    cursor: 'pointer',
  }));

  const Color = ({ backgroundColor }) => {
    return <ColorWrapper backgroundColor={backgroundColor} />;
  };
  //Click event that handles to return notes that matches only with square colors
  const onColorSwitchClick = (color) => {
    isFilter = true;
    localStorage.setItem('isFilter', true);

    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    }
    if (notes && notes.length) {
      notes = notes.filter((item) => {
        let backgroundColor = '';
        if (localStorage.getItem(`note-${item.id}-backgroundColor`)) {
          backgroundColor = localStorage.getItem(
            `note-${item.id}-backgroundColor`
          );
        }
        return backgroundColor === color;
      });
    }

    state(notes);
  };
  const ColorSwitcher = ({ onColorSwitchClick }) => {
    return (
      <Row justify="end" gutter={10}>
        {COLORS.map((color) => (
          <Col key={color} onClick={() => onColorSwitchClick(color)}>
            <Color backgroundColor={color} />
          </Col>
        ))}

        <AppstoreOutlined
          style={{ fontSize: '1.5rem', color: 'grey' }}
          onClick={() => {
            displayNotes();
          }}
        ></AppstoreOutlined>
      </Row>
    );
  };

  // Add some + icon and polish it up
  const noteAmountMessage = notes.length === 0 ? 'no' : notes.length;

  return (
    <>
      <div style={{ float: 'right' }}></div>

      <Container justify="center" className="container">
        <ColorSwitcher onColorSwitchClick={onColorSwitchClick} />
        <Col xs={24}>
          <CenteredText>You have {noteAmountMessage} notes .</CenteredText>
        </Col>
        <Col xs={24}>
          <CenteredText>
            Add one by using the ➕ &nbsp;button above.
          </CenteredText>
          <SpacingTop />
        </Col>
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
