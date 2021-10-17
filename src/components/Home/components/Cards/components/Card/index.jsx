import React from 'react';
import styled from 'styled-components';
import visa from '../../../../../../../public/assets/Visa.png';
import masterCard from '../../../../../../../public/assets/Mastercard.png';

const CardLayout = styled.div`
  width: 200px;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  box-sizing: border-box;
  padding: 16px 20px;
  position: relative;
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.2s;
  display: flex;
  flex-direction: column;
  &:hover {
    opacity: 0.85;
  }

  .system {
    position: absolute;
    top: 19px;
    right: 22px;
    font-size: 24px;
    color: #ffffff;
  }

  .info {
    margin-top: auto;
  }

  .info p {
    font-weight: bold;
    font-size: 16px;
    color: #111747;
    padding-bottom: 6px;
  }

  .info span {
    font-size: 12px;
    line-height: 14px;
    color: #111747;
  }
`;

const cardMaks = (num) => `**** **** **** ${num}`;
const getPaymentSymbol = (type) => {
  switch (type) {
    case 'Visa':
      return visa;
    case 'MasterCard':
      return masterCard;
    default:
      return ':(';
  }
};

export const Card = ({ data }) => {
  const { number, paymentSystem } = data;
  return (
    <CardLayout>
      <img className='system' src={getPaymentSymbol(paymentSystem)} />
      <div className='info'>
        <p>{paymentSystem}</p>
        <span>{cardMaks(number)}</span>
      </div>
    </CardLayout>
  );
};
