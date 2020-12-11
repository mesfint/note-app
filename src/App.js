import { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

// TODO try to add webpack alias in CRA to avoid '../../' in the future

import { NoteList } from './modules/notes';
import {
  NotesSearch,
  AddNoteCard,
  AddNoteModal,
  EditNoteModal,
} from './components';
import { Layout } from './modules';
import { GlobalStyles } from './GlobalStyles';

// Structure is clean
// Use Row Col for spacing and even better spacing, clear structure
export const App = () => {
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [notes, setNotes] = useState([]);
  const [addNoteModalOpen, setAddNoteModalOpen] = useState(false);
  const [editNoteModalOpen, setEditNoteModalOpen] = useState(false);

  const handleAddNoteModalOpen = () => {
    setAddNoteModalOpen(true);
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
    const newNote = {
      id: notes.length + 1,
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

  console.log(noteToEdit);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <AddNoteCard onModalOpen={handleAddNoteModalOpen} />
        <NoteList
          notes={notes}
          deleteNote={deleteNote}
          editNote={editNote}
          onEditNote={handleEditNoteModalOpen}
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
