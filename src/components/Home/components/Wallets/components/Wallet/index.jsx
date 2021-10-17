import React from 'react';
import styled from 'styled-components';

const WalletLayout = styled.div`
  width: 170px;
  height: 120px;
  background: #665ae8;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 21px 16px 23px;
  position: relative;
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.2s;
  display: flex;
  flex-direction: column;
  &:hover {
    opacity: 0.85;
  }

  .name {
    font-size: 11px;
    color: #ffffff;
    font-weight: 400;
    max-width: 85%;
  }

  .currency {
    position: absolute;
    top: 12px;
    right: 14px;
    font-size: 24px;
    color: #ffffff;
  }

  .value {
    margin-top: auto;
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
  }

  .description {
    margin-top: 1px;
    font-weight: normal;
    font-size: 10px;
    color: #ffffff;
  }
`;

const getCurrencySymbol = (currencyString) => {
  switch (currencyString) {
    case 'RUB':
      return '₽';
    case 'EUR':
      return '€';
    case 'USD':
      return '$';
    default:
      return ':(';
  }
};

export const Wallet = ({ data }) => {
  const { name, currency, value } = data;
  return (
    <WalletLayout>
      <p className='name'>{name}</p>
      <span className='currency'>{getCurrencySymbol(currency)}</span>
      <p className='value'>{value}</p>
      <p className='description'>Валюта: {currency}</p>
    </WalletLayout>
  );
};
