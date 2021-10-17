import { actionConstants } from './constants';

export const addWallet = (wallet) => {
  return (dispatch) => {
    dispatch({
      type: actionConstants.ADD_WALLET,
      payload: wallet,
    });
  };
};

const getData = async () => {
  //some async actions
};
