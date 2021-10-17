import React, { useState } from 'react';
import { Title, Label, BodyModalWrapper } from '../ui';
import { ActionButtons } from '..';

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
      onEnter({ name: walletName, currency, value: balance });
      hide();
    }
  };

  const handleInputs = (e, type) => {
    const { value } = e.target;
    switch (type) {
      case 'name':
        return setWalletName(value);
      case 'currency':
        return setCurrency(value);
      case 'balance':
        return setBalance(value);
      default:
        return null;
    }
  };

  const [walletName, setWalletName] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [balance, setBalance] = useState('');

  return (
    <>
      <Title>Добавить кошелек</Title>
      <BodyModalWrapper onSubmit={onSumbit}>
        <Label>
          <span>Наименование</span>
          <input
            type='text'
            placeholder='Название #4'
            value={walletName}
            required
            onChange={(e) => handleInputs(e, 'name')}
          />
        </Label>
        <Label>
          <span> Валюта</span>
          <select
            value={currency}
            required
            onChange={(e) => handleInputs(e, 'currency')}
          >
            <option value='USD'>USD</option>
            <option value='EUR'>EUR</option>
            <option value='RUB'>RUB</option>
          </select>
        </Label>
        <Label>
          <span> Сумма</span>
          <input
            value={balance}
            required
            onChange={(e) => handleInputs(e, 'balance')}
            type='number'
            placeholder='100'
          ></input>
        </Label>

        <ActionButtons onCancel={onCancel} />
      </BodyModalWrapper>
    </>
  );
};
