import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Close from '../../../public/assets/close.svg';
import { Wallet } from './components';
import { useDispatch } from 'react-redux';
import { addWallet } from '../../store/actions';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.75;
  z-index: 3000;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  z-index: 3001;
  background: #ffffff;
  width: 460px;
  height: 278px;
  box-shadow: 0px 4px 44px rgba(0, 0, 0, 0.29);
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseIcon = styled(Close)`
  top: 18px;
  right: 21px;
  position: absolute;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;
export const Modal = ({ isShowing, hide, type }) => {
  const overlayRef = useRef(null);
  const dispatch = useDispatch();

  const onEnter = (val) => {
    if (type === 'wallet') {
      return dispatch(addWallet(val));
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target === overlayRef.current) hide();
    };
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [hide, isShowing]);
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <Overlay ref={overlayRef} />
          <ModalWrapper>
            <CloseIcon onClick={hide} />
            {type === 'wallet' ? (
              <Wallet hide={hide} onEnter={onEnter} />
            ) : null}
          </ModalWrapper>
        </>,
        document.body
      )
    : null;
};
