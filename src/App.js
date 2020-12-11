import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

// TODO try to add webpack alias in CRA to avoid '../../' in the future

import { NoteList } from './modules/notes';
import { NotesSearch } from './components/NotesSearch';
import { AddNoteCard } from './components/AddNoteCard';
import { Layout } from './modules';
import { GlobalStyles } from './GlobalStyles';

const { confirm } = Modal;
// Structure is clean
// Use Row Col for spacing and even better spacing, clear structure
export const App = () => {
  const [noteEditing, setNoteEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState('');

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

  //add notes
  const addNote = (note) => {
    setNotes([note, ...notes]);
  };
  // edit notes
  const editNote = (id) => {
    const updatedNotes = [...notes].map((note) => {
      if (note.id === id) {
        note.text = editingText;
      }
      return note;
    });
    setNotes(updatedNotes);
    setNoteEditing(null);
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
        <AddNoteCard
          notes={notes}
          addNote={addNote}
          editingText={editingText}
          noteEditing={noteEditing}
          setEditingText={setEditingText}
        />
        <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />

        {/* Edit Notes */}

        {notes.map((note) => (
          <div key={note.id}>
            {noteEditing === note.id ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
              />
            ) : (
              <div className="list-item">
                {' '}
                <span>{note.text}</span>
              </div>
            )}

            {noteEditing === note.id ? (
              <button className="btn" onClick={() => editNote(note.id)}>
                Submit Edit
              </button>
            ) : (
              <button className="btn" onClick={() => setNoteEditing(note.id)}>
                Edit note
              </button>
            )}
          </div>
        ))}
      </Layout>
    </>
  );
};
