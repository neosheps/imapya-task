import React from 'react';
import styled, { css } from 'styled-components';
import Up from '../../../../../public/assets/up.svg';
import Down from '../../../../../public/assets/down.svg';
import EmptyIcon from '../../../../../public/assets/empty.svg';
import visa from '../../../../../public/assets/Visa.png';
import masterCard from '../../../../../public/assets/Mastercard.png';
const ResultWrapper = styled.div`
  width: 240px;
  height: auto;
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  ${(props) =>
    props.empty &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

const EmptyText = styled.p`
  font-size: 10px;
  line-height: 11px;
  text-align: center;
  color: #7c7c7c;
  margin-top: 27px;
`;

const StatusBar = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 13px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 20px;
  }
  margin-bottom: 39px;
`;

const SubTitle = styled.h2`
  font-size: 9px;
  line-height: 10px;
  color: #111747;
`;

const Value = styled.div`
  padding: 5px 0 20px;
  display: flex;
  align-items: center;
  p {
    font-size: 11px;
    line-height: 13px;
    color: #111747;
    display: inline-block;
  }
  img {
    display: inline-block;
    max-height: 12px;
    margin-right: 12px;
  }
`;

const Status = ({ type }) => {
  const isComing = type === 'incoming';
  return (
    <StatusBar>
      {isComing ? <Down /> : <Up />}
      {isComing ? 'Приход' : 'Расход'}
    </StatusBar>
  );
};

const Empty = () => {
  return (
    <>
      <EmptyIcon />
      <EmptyText>Выберите транзакцию, чтобы увидеть детали</EmptyText>
    </>
  );
};
export const Result = ({ active }) => {
  if (!active) {
    return (
      <ResultWrapper empty={true}>
        <Empty />
      </ResultWrapper>
    );
  }
  const cardMaks = (num) => `**** **** **** ${num}`;
  const randSystem = () => {
    if (Math.random() >= 0.5) return visa;
    return masterCard;
  };
  const { type, transactionNumber, currency, summ, paymentType, date } = active;
  return (
    <ResultWrapper empty={!active}>
      <Status type={type} />
      <SubTitle>Номер транзакции</SubTitle>
      <Value>
        <p>{transactionNumber}</p>
      </Value>
      <SubTitle>Сумма</SubTitle>
      <Value>
        <p>
          {summ} {currency}
        </p>
      </Value>
      <SubTitle>Способ оплаты</SubTitle>
      <Value>
        <img src={randSystem()} />
        <p>{cardMaks(paymentType.card)}</p>
      </Value>
      <SubTitle>Дата</SubTitle>
      <Value>
        <p>{date}</p>
      </Value>
    </ResultWrapper>
  );
};
