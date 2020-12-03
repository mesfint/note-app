import React from 'react';
import 'antd/dist/antd.css';

// TODO try to add webpack alias in CRA to avoid '../../' in the future

import { NoteList } from './modules/notes';
import { NotesSearch } from './components/NotesSearch';
import { AddNoteCard } from './components/AddNoteCard';
import { Layout } from './modules';
import { GlobalStyles } from './GlobalStyles';

// Structure is clean
// Use Row Col for spacing and even better spacing, clear structure
export const App = () => {
  const [notes, setNotes] = React.useState([
    {
      id: 1,
      text:
        'Learn about the cloud, including the history, building blocks, and types on your way to becoming a Cloud Administrator.',
    },
    {
      id: 2,
      text:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
    },
    {
      id: 3,
      text:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
    },
  ]);

  //add notes
  const addNote = (note) => {
    setNotes([note, ...notes]);
  };
  //Save notes into Local storage
  //To populate  notes  initially when  the app renders
  //use  useEffect with empty dependency array
  React.useEffect(() => {
    const notesStorage = JSON.parse(localStorage.getItem('note-taking-app'));
    if (notesStorage) {
      setNotes(notesStorage);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('note-taking-app', JSON.stringify(notes));
  }, [notes]);

  //Delete notes
  const deleteNote = (id) => {
    const removedArr = [...notes].filter((note) => note.id !== id);
    setNotes(removedArr);
  };

  return (
    <>
      <GlobalStyles />
      <Layout>
        <AddNoteCard addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </Layout>
    </>
  );
};
