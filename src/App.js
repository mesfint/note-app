import React, { useState, useEffect } from 'react';
import { NoteList } from './modules/notes';
import { AddNoteCard, AddNoteModal, EditNoteModal } from './components';
import { Layout } from './modules';
import { v4 as uuidv4 } from 'uuid';
import { GlobalStyles } from './GlobalStyles';
import 'antd/dist/antd.css';

import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

//App main entry component
export const App = () => {
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [editingText, setEditingText] = useState('');
  let [notes, setNotes] = useState([]);
  const [addNoteModalOpen, setAddNoteModalOpen] = useState(false);
  const [editNoteModalOpen, setEditNoteModalOpen] = useState(false);
  const [filterNote, setFilterNote] = useState([]);

  const handleAddNoteModalOpen = () => {
    const savedNotes = localStorage.getItem('notes');
    localStorage.setItem('isFilter', false);

    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    }
    setAddNoteModalOpen(true);
    setNotes(notes);
  };
  const handleDisplayAllNotes = () => {
    const savedNotes = localStorage.getItem('notes');

    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    }

    setNotes(notes);
  };

  const handleAddNoteModalClose = () => {
    setAddNoteModalOpen(false);
  };

  const handleEditNoteModalOpen = (note) => {
    setNoteToEdit(note);
    setEditNoteModalOpen(true);
  };

  const handleEditNoteModalClose = () => {
    setEditNoteModalOpen(false);
  };

  //add notes
  const addNote = (title, text) => {
    //Get notes from LS if there is any
    const savedNotes = localStorage.getItem('notes');
    localStorage.setItem('isFilter', false);

    //If there is notes in LS we need to parser them for further manipulation
    //Otherwise add new notes

    if (savedNotes) {
      notes = JSON.parse(savedNotes);
    }
    const newNote = {
      /*   id: notes.length + 1, */
      id: uuidv4(),
      title,
      text,
    };

    setNotes([newNote, ...notes]);
  };
  // edit notes
  const editNote = (editedNote) => {
    const updatedNotes = [...notes].map((note) => {
      if (note.id === editedNote.id) {
        return editedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
    setNoteToEdit(null);
    setEditingText('');
  };

  //Delete notes
  const deleteNote = (id) => {
    const removedArr = [...notes].filter((note) => note.id !== id);

    setNotes(removedArr);
  };

  return (
    <>
      <GlobalStyles />
      <Layout>
        <AddNoteCard onModalOpen={handleAddNoteModalOpen} />
        <NoteList
          notes={notes}
          state={setNotes}
          deleteNote={deleteNote}
          editNote={editNote}
          onEditNote={handleEditNoteModalOpen}
          displayNotes={handleDisplayAllNotes}
        />
      </Layout>
      <AddNoteModal
        onAddNote={addNote}
        isOpen={addNoteModalOpen}
        onClose={handleAddNoteModalClose}
      />
      <EditNoteModal
        note={noteToEdit}
        onEditNote={editNote}
        isOpen={editNoteModalOpen}
        onClose={handleEditNoteModalClose}
      />
    </>
  );
};
