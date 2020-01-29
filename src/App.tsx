import React, { FunctionComponent } from 'react';
import Layout from './containers/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;
