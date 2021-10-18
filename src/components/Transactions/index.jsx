import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Table, Result } from './components';
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
  display: flex;
  flex-direction: column;
`;

const TranscationContent = styled.div`
  display: flex;
`;

export const Transactions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { transactions } = useSelector((state) => state.dataset);

  const handleActive = (i) => {
    if (activeIndex === i) return setActiveIndex(null);
    setActiveIndex(i);
  };
  return (
    <TransactionsLayout>
      <Title>Транзакции</Title>
      <TranscationContent>
        <Table
          transactions={transactions}
          setActive={handleActive}
          active={activeIndex}
        />
        <Result active={transactions[activeIndex]} />
      </TranscationContent>
    </TransactionsLayout>
  );
};
