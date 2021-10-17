import React, { useState } from 'react';
import styled from 'styled-components';
import { Title, Label } from '../ui';
import { ActionButtons } from '..';
const WalletModalWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  height: 100%;
`;

const checkSumm = (summ) => {
  if (summ < 1) alert('Сумма должна быть больше 0');
  else if (summ > 1000) alert('Сумма не должна превышать 1000');
  else return true;
};

export const Wallet = ({ hide, onEnter }) => {
  const onCancel = (e) => {
    e.preventDefault();
    hide();
  };
  const onSumbit = (e) => {
    e.preventDefault();
    const test = checkSumm(balance);
    if (test) {
      alert('test proshel');
    }
  };

  const handleInputs = (e, type) => {
    const { value } = e.target;
    switch (type) {
      case 'name':
        return setName(value);
      case 'card':
        return setCard(value);
      case 'month':
        return setBalance(value);
      default:
        return null;
    }
  };

  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [date, setDate] = useState({
    month: '',
    year: '',
  });

  return (
    <>
      <Title>Добавить карту</Title>
      <WalletModalWrapper onSubmit={onSumbit}>
        <Label>
          <span>Владелец карты</span>
          <input
            type='text'
            placeholder='IVAN IVANOV'
            value={name}
            required
            onChange={(e) => handleInputs(e, 'name')}
          />
        </Label>
        <Label>
          <span> Номер карты</span>
          <select
            value={card}
            required
            onChange={(e) => handleInputs(e, 'card')}
          >
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='RUB'>RUB</option>
          </select>
        </Label>
        <Label>
          <span> Дата (ММ/ГГ)</span>
          <input
            value={balance}
            required
            onChange={(e) => handleInputs(e, 'balance')}
            type='text'
            placeholder='12'
          />
          <input
            value={balance}
            required
            onChange={(e) => handleInputs(e, 'balance')}
            type='text'
            placeholder='23'
          />
        </Label>

        <ActionButtons onCancel={onCancel} />
      </WalletModalWrapper>
    </>
  );
};
