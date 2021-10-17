import { actionConstants } from './constants';

const randSystem = () => {
  if (Math.random() >= 0.5) return 'Visa';
  return 'MasterCard';
};

export const addWallet = (walletData) => {
  return (dispatch) => {
    dispatch({
      type: actionConstants.ADD_WALLET,
      payload: walletData,
    });
  };
};

export const addCard = (cardData) => {
  return (dispatch) => {
    const formData = {
      number: cardData.card.slice(-4),
      paymentSystem: randSystem(),
    };
    dispatch({
      type: actionConstants.ADD_CARD,
      payload: formData,
    });
  };
};
