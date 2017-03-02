import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const unreadCount = 1;
    const name = 'Marcin';

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><FormattedMessage
                id="welcome"
                defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                  one {message}
                  other {messages}
                }`}
                values={{name: <b>{name}</b>, unreadCount}}
              />
          </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
