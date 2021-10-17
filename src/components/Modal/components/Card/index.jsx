import React, { useState, useRef, useEffect } from 'react';
import { Title, Label, BodyModalWrapper } from '../ui';
import { ActionButtons } from '..';

const hasNumber = /\d/;
const isMoon = (number) => {
  const arr = [];
  const card_number = number.toString();
  for (let i = 0; i < card_number.length; i++) {
    if (i % 2 === 0) {
      var m = parseInt(card_number[i]) * 2;
      if (m > 9) {
        arr.push(m - 9);
      } else {
        arr.push(m);
      }
    } else {
      var n = parseInt(card_number[i]);
      arr.push(n);
    }
  }
  const summ = arr.reduce(function (a, b) {
    return a + b;
  });
  return Boolean(!(summ % 10));
};
export const Card = ({ hide, onEnter }) => {
  const onCancel = (e) => {
    e.preventDefault();
    hide();
  };
  const onSumbit = (e) => {
    e.preventDefault();
    if (isMoon(card)) {
      onEnter({ card, name, month, year });
      return hide();
    }
    alert('Moon Algorithm Error');
  };

  const handleName = (e) => {
    const { value } = e.target;
    if (hasNumber.test(value)) return;
    setName(value);
  };

  const handleMonth = (e) => {
    const { value } = e.target;
    if (value > 12 || value < 1) return;
    setMonth(value);
  };

  const handleYear = (e) => {
    const { value } = e.target;
    if (value > 50) return;
    setYear(value);
  };

  const handleChange = () => {
    const cardValue = inputCard.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
    inputCard.current.value = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]} ${cardValue[2]}${`${
          cardValue[3] ? ` ${cardValue[3]}` : ''
        }`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
    const numbers = inputCard.current.value.replace(/(\D)/g, '');
    setCard(numbers);
  };

  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const inputCard = useRef();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    handleChange();
  }, [card]);

  return (
    <>
      <Title>Добавить карту</Title>
      <BodyModalWrapper onSubmit={onSumbit}>
        <Label>
          <span>Владелец карты</span>
          <input
            type='text'
            placeholder='IVAN IVANOV'
            style={{ textTransform: 'uppercase' }}
            required
            value={name}
            onChange={handleName}
          />
        </Label>
        <Label>
          <span>Номер карты</span>
          <input
            type='text'
            placeholder='4111 1111 1111 1111'
            ref={inputCard}
            onChange={handleChange}
            required
          />
        </Label>
        <Label two>
          <span>Дата (ММ/ГГ)</span>
          <input
            required
            type='number'
            placeholder='12'
            value={month}
            onChange={handleMonth}
          />
          <input
            required
            max='31'
            min='1'
            type='number'
            placeholder='23'
            value={year}
            onChange={handleYear}
          />
        </Label>

        <ActionButtons onCancel={onCancel} />
      </BodyModalWrapper>
    </>
  );
};
