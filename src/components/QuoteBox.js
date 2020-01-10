import React from 'react';

const TWEET_URL = 'https://twitter.com/intent/tweet?text=';

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.newQuote = this.newQuote.bind(this);
        this.getTweetUrl = this.getTweetUrl.bind(this);
    }

    newQuote() {
        this.props.getNewQuote();
    }

    getTweetUrl() {
        const tweet = `${this.props.quote.quote} - ${this.props.quote.author}`;
        return (TWEET_URL + encodeURIComponent(tweet));
    }

    render() {
        return(
            <div id={this.props.id}>
                <div id="text"><span className="quote">"</span>{this.props.quote.quote}<span className="quote">"</span></div>
                <div id="author"><span className="by">by</span>{this.props.quote.author}</div>
                <button id="new-quote" onClick={this.newQuote}>New quote</button>
                <a id="tweet-quote" href={this.getTweetUrl()}>Share with twitter</a>
            </div>
        );
    }
}

export default QuoteBox;