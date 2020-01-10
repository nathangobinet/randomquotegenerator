const NEW = 'NEW';

const quotes = [
  {
    quote: 'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
    author: 'Henry Ford',
  },
  {
    quote: 'It’s not the years in your life that count. It’s the life in your years.',
    author: 'Abraham Lincoln',
  },
  {
    quote: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale',
  },
  {
    quote: 'Either write something worth reading or do something worth writing.',
    author: 'Benjamin Franklin',
  },
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getNewQuote = () => ({
  type: NEW,
  quote: getRandomQuote(),
});

const rootReducer = (state = getRandomQuote(), action) => {
  switch (action.type) {
    case NEW:
      return action.quote;
    default:
      return state;
  }
};

export { rootReducer, getNewQuote };
