import React, { useState } from 'react';
import { Wallets } from './components';
import { useSelector } from 'react-redux';
export const Home = () => {
  const { wallets, cards } = useSelector((state) => state.dataset);
  return (
    <>
      <Wallets walletsData={wallets} />
    </>
  );
};
