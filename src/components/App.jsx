import React from 'react';
import { connect } from 'react-redux';
import QuoteBox from './QuoteBox';
import { getNewQuote } from '../redux/reducers';

const mapStateToProps = (state) => ({ quote: state });

const mapDispatchToProps = (dispatch) => ({
  getNewQuote: () => {
    dispatch(getNewQuote());
  },
});

const QuoteBoxContainer = connect(mapStateToProps, mapDispatchToProps)(QuoteBox);

const App = () => (
  <div>
    <div className="wrapper">
      <h1>
        Random
        <span className="quote"> quote </span>
        generator
      </h1>
      <QuoteBoxContainer id="quote-box" />
    </div>
    <footer>
      Made with
      <span aria-label="love" role="img"> ♥️ </span>
      <span>by </span>
      <a href="https://github.com/nathangobinet/randomquotegenerator" target="_blank" without rel="noopener noreferrer">Nathan Gobinet</a>
    </footer>
  </div>
);

export default App;
