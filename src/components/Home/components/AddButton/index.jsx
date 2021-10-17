import React from 'react';
import styled from 'styled-components';
import { Modal, useModal } from '../../../Modal';

const AddButtonLayout = styled.div`
  width: 100px;
  height: 120px;
  left: 710px;
  top: 142px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  border-radius: 20px;
  color: #111747;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }

  span {
    font-size: 48px;
    color: #111747;
  }

  p {
    font-size: 10px;
    text-align: center;
  }
`;

export const AddButton = ({ type = 'wallet' }) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Modal type={type} isShowing={isShowing} hide={toggle} />
      <AddButtonLayout onClick={toggle}>
        <span>+</span> <p>Добавить {type === 'wallet' ? 'кошелек' : 'карту'}</p>
      </AddButtonLayout>
    </>
  );
};
