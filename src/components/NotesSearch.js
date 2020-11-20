import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

export const NotesSearch = () => {
  return (
    <div>
      <Search
        placeholder="Type to search for notes..."
        enterButton
        size="large"
      />
    </div>
  );
};
