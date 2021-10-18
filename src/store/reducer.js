import { actionConstants } from './constants';

const initialState = {
  wallets: [
    {
      name: 'Название 1',
      currency: 'USD',
      value: '150.86',
    },
    {
      name: 'Название 2',
      currency: 'EUR',
      value: '678.15',
    },
    {
      name: 'Название 3',
      currency: 'RUB',
      value: '321.23',
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
  transactions: [
    {
      date: '2021-10-17T23:25:07+0000',
      type: 'incoming',
      summ: '6500',
      currency: 'RUB',
      transactionNumber: '2313123217893',
      paymentType: {
        card: '4500',
        paymentSystem: 'MasterCard',
      },
    },
    {
      date: '2021-10-03T23:25:07+0000',
      type: 'outgoing',
      summ: '300',
      currency: 'EUR',
      transactionNumber: '2313121127893',
      paymentType: {
        card: '4213',
        paymentSystem: 'Visa',
      },
    },
    {
      date: '2021-04-03T23:25:07+0000',
      type: 'incoming',
      summ: '234',
      currency: 'USD',
      transactionNumber: '2313121127893',
      paymentType: {
        card: '4213',
        paymentSystem: 'Visa',
      },
    },
    {
      date: '2021-10-17T23:25:07+0000',
      type: 'outgoing',
      summ: '3000',
      currency: 'RUB',
      transactionNumber: '2313121127893',
      paymentType: {
        card: '4213',
        paymentSystem: 'MasterCard',
      },
    },
    {
      date: '2021-08-03T23:25:07+0000',
      type: 'incoming',
      summ: '404',
      currency: 'EUR',
      transactionNumber: '2313121127893',
      paymentType: {
        card: '4123',
        paymentSystem: 'Visa',
      },
    },
    {
      date: '2021-10-17T23:25:07+0000',
      type: 'incoming',
      summ: '6500',
      currency: 'RUB',
      transactionNumber: '2313123217893',
      paymentType: {
        card: '4500',
        paymentSystem: 'MasterCard',
      },
    },
    {
      date: '2021-10-03T23:25:07+0000',
      type: 'outgoing',
      summ: '300',
      currency: 'EUR',
      transactionNumber: '2313121127893',
      paymentType: {
        card: '4213',
        paymentSystem: 'Visa',
      },
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstants.ADD_WALLET:
      return { ...state, wallets: [action.payload, ...state.wallets] };
    case actionConstants.ADD_CARD:
      return { ...state, cards: [action.payload, ...state.cards] };
    default:
      return { ...state };
  }
};

export default reducer;
