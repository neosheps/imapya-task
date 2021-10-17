import React from 'react';
import styled from 'styled-components';
import Home from '../../../public/assets/home.svg';
import Card from '../../../public/assets/card.svg';
import { Link } from 'react-router-dom';
const SideBarLayout = styled.div`
  width: 60px;
  left: 0;
  background: #111747;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & svg {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
  & svg:last-child {
    padding-top: 45px;
  }
`;

export const SideBar = () => (
  <SideBarLayout>
    <Link to={'/'}>
      <Home />
    </Link>
    <Link to={'/transactions'}>
      <Card />
    </Link>
  </SideBarLayout>
);
