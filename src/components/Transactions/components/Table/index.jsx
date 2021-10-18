import React from 'react';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import Up from '../../../../../public/assets/up.svg';
import Down from '../../../../../public/assets/down.svg';

const TableWrapper = styled.div`
  min-width: 730px;
`;

const StyledTable = styled.table`
  width: 100%;

  border-collapse: collapse;

  tbody tr:first-child td {
    padding-top: 17px;
    position: relative;
  }

  tbody tr:first-child td:after {
    content: '';
    position: absolute;
    background: #cccccc;
    height: 1px;
    width: 101%;
    left: 0;
    bottom: 0;
  }
  tbody tr:first-child td:last-child:after {
    width: 100%;
  }

  th {
    font-weight: bold;
    font-size: 10px;
    color: #111747;
    text-align: center;
  }
  .summ,
  .date {
    font-size: 11px;
    line-height: 13px;
    color: #111747;
    text-align: left;
  }

  tr:last-child {
    border-bottom: none !important;
  }
`;

const StatusTd = styled.td`
  text-align: center;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 10px;
  }
`;

const InputTr = styled.tr`
  background: #fff;
  transition: background 0.2s;
  cursor: pointer;
  border-top: 17px solid transparent;
  border-bottom: 16px solid transparent;
  border-spacing: 0 8px;
  ${(props) => props.active && 'background: #f6f6f6;'}
  &:hover {
    background: #f6f6f6;
  }
`;
const Status = ({ type }) => {
  const isComing = type === 'incoming';
  return (
    <StatusTd>
      {isComing ? <Down /> : <Up />}
      {isComing ? 'Приход' : 'Расход'}
    </StatusTd>
  );
};

export const Table = ({ transactions, setActive, active }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', width: '10%' }}>Дата</th>
            <th>Статус</th>
            <th style={{ textAlign: 'left', width: '10%' }}>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td />
            <td />
          </tr>
          {transactions.map((action, i) => (
            <InputTr key={i} onClick={() => setActive(i)} active={active === i}>
              <td className='date'>
                {format(parseISO(action.date), 'dd/mm/yy')}
              </td>
              <Status type={action.type} />
              <td className='summ'>
                {action.summ} {action.currency}
              </td>
            </InputTr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};
