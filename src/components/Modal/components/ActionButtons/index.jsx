import React from 'react';
import { ButtonWrapper, SumbitButton, CancelButton } from '../ui';

export const ActionButtons = ({ onCancel }) => {
  return (
    <ButtonWrapper>
      <SumbitButton type='submit'>Добавить</SumbitButton>
      <CancelButton onClick={onCancel}>Отмена</CancelButton>
    </ButtonWrapper>
  );
};
