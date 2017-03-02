import React, { Component } from 'react';
import { intlShape, injectIntl, defineMessages, FormattedMessage, FormattedNumber, FormattedDate, FormattedRelative } from 'react-intl';

import logo from './logo.svg';
import './App.css';

const messages = defineMessages({
  feesMessage: {
    id: "Tooltip.fees",
    defaultMessage: "Click here to understand how we calculate fees.",
  },
});

class App extends Component {

  render() {
    const unreadCount = 1;
    const name = 'Marcin';
    const { formatMessage } = this.props.intl;

    return (
      <div className="App">
        <p style={{ backgroundColor: 'lime', padding: 10, color: 'white', marginTop: 0 }}>Locale: {this.props.locale}</p>
        <p>
          <FormattedMessage
            id="welcome"
            defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
              one {message}
              other {messages}
            }`}
            values={{name: <b>{name}</b>, unreadCount}}
        />
        </p>
        <FormattedMessage
          id="Tooltip.fees"
          defaultMessage="Click here to understand how we calculate fees."
        />
        <p>func: {formatMessage(messages.feesMessage)}</p>
        <p><FormattedNumber value={1000000} /></p>
        <p><FormattedNumber value={1000000} style="currency" currency="USD" /></p>
        <p><FormattedNumber value={1461.23} style="currency" currency="GBP" /></p>
        <p><FormattedNumber value={1461.23} style="currency" currency="CHF" /></p>
        <p><FormattedNumber value={1461.23} style="currency" currency="EUR" /></p>
        <p><FormattedDate value={Date.now()} /></p>
        <p><FormattedDate value={Date.now()} month="long" /></p>
        <p><FormattedDate value={Date.now()} month="long" day="numeric" /></p>
        <p><FormattedDate value={Date.now()} month="long" day="numeric" year="numeric" /></p>
        <p>Posted: <FormattedRelative value={Date.now()} /></p>
        <p>Posted: <FormattedRelative value={Date.now() - 3*60*60*1000} /></p>
      </div>
    );
  }
}

export default injectIntl(App);
