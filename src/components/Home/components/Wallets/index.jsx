import React from 'react';
import styled from 'styled-components';
import { Wallet } from './components';
import { AddButton } from '..';
import { Title } from '../ui';
const WalletsLayout = styled.div`
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
`;

export const Wallets = ({ walletsData }) => {
  return (
    <>
      <Title>Мои кошельки</Title>
      <WalletsLayout>
        {walletsData.map((walletData) => (
          <Wallet key={walletData.name} data={walletData} />
        ))}
        <AddButton type='wallet' />
      </WalletsLayout>
    </>
  );
};
