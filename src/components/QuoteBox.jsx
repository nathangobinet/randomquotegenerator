/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const TWEET_URL = 'https://twitter.com/intent/tweet?text=';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.newQuote = this.newQuote.bind(this);
    this.getTweetUrl = this.getTweetUrl.bind(this);
  }

  getTweetUrl() {
    const { quote, author } = this.props.quote;
    const tweet = `${quote} - ${author}`;
    return (TWEET_URL + encodeURIComponent(tweet));
  }

  newQuote() {
    return this.props.getNewQuote();
  }

  render() {
    return (
      <div id={this.props.id}>
        <div id="text">
          <span className="quote">&quot;</span>
          {this.props.quote.quote}
          <span className="quote">&quot;</span>
        </div>
        <div id="author">
          <span className="by">by</span>
          {this.props.quote.author}
        </div>
        <button id="new-quote" type="button" onClick={this.newQuote}>New quote</button>
        <a id="tweet-quote" href={this.getTweetUrl()}>Share with twitter</a>
      </div>
    );
  }
}

QuoteBox.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getNewQuote: PropTypes.func.isRequired,
};

export default QuoteBox;
