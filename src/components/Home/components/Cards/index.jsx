import React from 'react';
import styled from 'styled-components';
import { Card } from './components';
import { AddButton } from '..';
import { Title } from '../ui';

const CardsWrapper = styled.div`
  margin-top: 70px;
`;
const CardsLayout = styled.div`
  display: flex;
  gap: 20px;
  flex-flow: row wrap;
`;

export const Cards = ({ cardsData }) => {
  return (
    <CardsWrapper>
      <Title>Мои карты</Title>
      <CardsLayout>
        {cardsData.map((card, i) => (
          <Card data={card} key={i} />
        ))}
        <AddButton type='cards' />
      </CardsLayout>
    </CardsWrapper>
  );
};
