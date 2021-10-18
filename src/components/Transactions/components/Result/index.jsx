import React from 'react';
import styled, { css } from 'styled-components';
import Up from '../../../../../public/assets/up.svg';
import Down from '../../../../../public/assets/down.svg';
import EmptyIcon from '../../../../../public/assets/Empty.svg';

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
  return (
    <ResultWrapper empty={!active}>
      {active ? (
        <>
          <Status type={active.type} />
        </>
      ) : (
        <Empty />
      )}
    </ResultWrapper>
  );
};
