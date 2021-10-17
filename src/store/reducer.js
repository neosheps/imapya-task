import { actionConstants } from './constants';

const initialState = {
  wallets: [
    {
      name: 'Название 1',
      currency: 'USD',
      value: '150,86',
    },
    {
      name: 'Название 2',
      currency: 'EUR',
      value: '678,15',
    },
    {
      name: 'Название 3',
      currency: 'RUB',
      value: '321,23',
    },
  ],
  cards: [
    {
      number: '4550',
      paymentSystem: 'Visa',
    },
    {
      number: '2367',
      paymentSystem: 'MasterCard',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstants.ADD_WALLET:
      return { ...state, wallets: [action.payload, ...state.wallets] };
    default:
      return { ...state };
  }
};

export default reducer;
