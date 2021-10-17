import React from 'react';
import { Wallets, Cards } from './components';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const HomeLayout = styled.div`
  padding-left: 80px;
  padding-top: 101px;
`;
export const Home = () => {
  const { wallets, cards } = useSelector((state) => state.dataset);
  return (
    <HomeLayout>
      <Wallets walletsData={wallets} />
      <Cards cardsData={cards} />
    </HomeLayout>
  );
};
