import React from 'react';
import styled from 'styled-components';
import { Wallet } from './components';
import { AddButton } from '..';
import { Title } from '../ui';
const WalletsLayout = styled.div`
  display: flex;
`;

export const Wallets = ({ walletsData }) => {
  return (
    <WalletsLayout>
      <Title>Мои кошельки</Title>
      {walletsData.map((walletData, i) => (
        <Wallet key={i} data={walletData} />
      ))}
      <AddButton />
    </WalletsLayout>
  );
};
