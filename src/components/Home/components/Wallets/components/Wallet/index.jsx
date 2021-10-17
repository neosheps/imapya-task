import React from 'react';
import styled from 'styled-components';

const WalletLayout = styled.div`
  width: 170px;
  height: 120px;
  background: #665ae8;
  border-radius: 20px;
`;

export const Wallet = ({ key, data }) => {
  const { name, currency, value } = data;
  return (
    <WalletLayout key={key}>
      <p className='name'>{name}</p>
      <span className='currency'>{currency}</span>
      <p className='value'>{value}</p>
      <p className='description'>Валюта: {currency}</p>
    </WalletLayout>
  );
};
