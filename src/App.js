import React from 'react';
import styled from 'styled-components';
import { Home, SideBar } from './components';
import './App.css';

const App = () => {
  const AppLayout = styled.div`
    min-height: 100vh;
    display: flex;
  `;

  return (
    <AppLayout>
      <SideBar />
      <Home />
    </AppLayout>
  );
};

export default App;
