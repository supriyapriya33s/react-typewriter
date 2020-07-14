import React from 'react';
import Routes from './Routes';
import { TypeContextProvider } from './ContextProvider/TypeContext';

const App = () => (
  <TypeContextProvider>
    <Routes />
  </TypeContextProvider>
);

export default App;
