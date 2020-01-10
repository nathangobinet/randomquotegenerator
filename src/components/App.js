import React from 'react';
import QuoteBox from './QuoteBox';
import { connect } from 'react-redux'
import { getNewQuote } from '../redux/reducers'

const mapStateToProps = (state) => {
    return { quote: state };
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getNewQuote: () => {
            dispatch(getNewQuote());
        }
     };
}

const QuoteBoxContainer = connect(mapStateToProps, mapDispatchToProps)(QuoteBox);

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <h1>Random <span className="quote">quote</span> generator</h1>
                    <QuoteBoxContainer id="quote-box" />
                </div>
                <footer>
                    Made with ♥️ by <a href="https://github.com/nathangobinet/randomquotegenerator" target="_blank">Nathan Gobinet</a>
                </footer>
            </div>
        );
    }
}

export default App;