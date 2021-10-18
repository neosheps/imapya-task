import React from 'react';
import styled from 'styled-components';
import { Home, SideBar, Transactions } from './components';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App = () => {
  const AppLayout = styled.div`
    min-height: 100vh;
    display: flex;
  `;

  return (
    <Router>
      <AppLayout>
        <SideBar />
        <Switch>
          <Route path='/transactions'>
            <Transactions />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default App;
