import styled, { css } from 'styled-components';

const Title = styled.h2`
  font-family: Arial;
  font-size: 14px;
  color: #111747;
  padding-bottom: 37px;
  text-align: center;
`;

const Label = styled.label`
  font-size: 12px;
  color: #868686;
  padding-bottom: 14px;
  position: relative;
  input,
  select {
    background: #fcfcfc;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    padding: 3px 5px;
    margin-left: 50px;
  }
  ${(props) =>
    props.two &&
    css`
      input {
        display: inline-block;
        max-width: 57px;
        &:last-child{
          margin-left: 10px;
        }
      }
    `}
  span {
    line-height: 24px;
    position: absolute;
    left: -75px;
    width: 100px;
    text-align: end;
    color: #868686;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
  & button:last-child {
    margin-left: 23px;
  }
  button {
    border: none;
    text-decoration: none;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const SumbitButton = styled.button`
  background: #35dfc1;
  border-radius: 15px;
  padding: 8px 27px;
  color: #ffffff;
`;

const CancelButton = styled.button`
  font-size: 12px;
  line-height: 14px;
  color: #111747;
  padding: 8px 27px;
`;

const BodyModalWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-sizing: border-box;
  height: 100%;
`;

export {
  Title,
  Label,
  ButtonWrapper,
  SumbitButton,
  CancelButton,
  BodyModalWrapper,
};
