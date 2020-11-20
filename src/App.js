import React from 'react';

import 'antd/dist/antd.css';

// TODO try to add webpack alias in CRA to avoid '../../' in the future
import { Notes } from './components';
// index files are really helpful
import { Layout } from './modules';
// Adding global styles through styled components utilities and also as a component
import { GlobalStyles } from './GlobalStyles';

// Structure is clean
// Use Row Col for spacing and even better spacing, clear structure
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Notes />
      </Layout>
    </>
  );
};
