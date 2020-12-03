import React from 'react';
import { List, Card, Modal, Input, Row, Col, Typography, Space } from 'antd';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const Note = ({ note, deleteNote }) => {
  const handleDeleteNote = (id) => {
    deleteNote(note.id);
  };
  return (
    <>
      <Card
        style={{
          width: 300,
          padding: '1rem',
        }}
        cover={note.text}
        actions={[
          <DeleteOutlined key="delete" onClick={handleDeleteNote} />,
          <EditOutlined key="edit" />,
        ]}
      ></Card>
    </>
  );
};
