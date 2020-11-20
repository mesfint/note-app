import React, { useState } from 'react';
import { List, Card, Modal, Input } from 'antd';

const { TextArea } = Input;

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
function AppNote() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onOk = () => {
    setVisible(false);
  };
  const onCancle = () => {
    setVisible(false);
  };
  const data = [
    {
      title: 'Startup meeting',
      content:
        'Learn about the cloud, including the history, building blocks, and types on your way to becoming a Cloud Administrator.',
      edit: (
        <a href="#">
          <i className="fas fa-pen" onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i className="fas fa-trash"></i>
        </a>
      ),
    },
    {
      title: 'Bootcamp Practice',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i className="fas fa-pen" onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i className="fas fa-trash"></i>
        </a>
      ),
    },
    {
      title: 'Code war practice',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i className="fas fa-pen" onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i className="fas fa-trash"></i>
        </a>
      ),
    },
    {
      title: 'Mentorship meeting',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i className="fas fa-pen" onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i className="fas fa-trash"></i>
        </a>
      ),
    },
    {
      title: 'Design Figma wireframes',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i className="fas fa-pen" onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i className="fas fa-trash"></i>
        </a>
      ),
    },
    {
      title: 'Finish projects',
      content:
        'Breakpoints are the key moments when a design is adapted to a new screen size; for example, a breakpoint',
      edit: (
        <a href="#">
          <i className="fas fa-pen" onClick={showModal}></i>
        </a>
      ),
      delete: (
        <a href="#">
          <i className="fas fa-trash"></i>
        </a>
      ),
    },
  ];

  return (
    <div className="site-card-wrapper">
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
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{ backgroundColor: generatecolor() }}
              title={item.title}
            >
              {item.content}
              <div className="editNote">
                <div className="edit">{item.edit}</div>
                <div className="del">{item.delete}</div>
              </div>
            </Card>
            <Modal
              title="Edit note"
              visible={showModal}
              onClose={onClose}
              okText={'EDIT'}
              onOk={onOk}
              onCancel={onCancle}
              visible={visible}
            >
              <TextArea rows={4} />
            </Modal>
          </List.Item>
        )}
      />
    </div>
  );
}

export default AppNote;
