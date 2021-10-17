import { actionConstants } from './constants';

export const addWallet = (walletData) => {
  return (dispatch) => {
    dispatch({
      type: actionConstants.ADD_WALLET,
      payload: walletData,
    });
  };
};
