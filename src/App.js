import React from 'react';
import styled from 'styled-components';
import { Home, NavBar } from './components';
import './App.css';

const App = () => {
  const AppLayout = styled.div`
    min-height: 100vh;
    display: flex;
  `;

  return (
    <AppLayout>
      <NavBar />
      <Home />
    </AppLayout>
  );
};

export default App;
