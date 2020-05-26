const paymentsCard = { cash: '100$' };
const creditCard = { creditLimit: '50$', cash: '200$'};

const assign = Object.assign;

const universalCard = assign({}, creditCard, paymentsCard);

