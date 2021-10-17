import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const Title = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  color: #111747;
  padding-bottom: 42px;
`;

const TransactionsLayout = styled.div`
  padding-left: 80px;
  padding-top: 101px;
`;

export const Transactions = () => {
  return (
    <TransactionsLayout>
      <Title>Транзакции</Title>
    </TransactionsLayout>
  );
};
