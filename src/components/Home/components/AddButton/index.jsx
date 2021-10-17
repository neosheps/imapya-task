import React from 'react';
import styled from 'styled-components';

const AddButtonLayout = styled.div`
  height: 100%;
  width: 120px;
`;

export const AddButton = () => {
  const onAddClick = () => {
    console.log('add fire');
  };

  return (
    <AddButtonLayout onClick={onAddClick}>+ Добавить кошелек</AddButtonLayout>
  );
};
