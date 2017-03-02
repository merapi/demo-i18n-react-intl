import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider, addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import deLocaleData from 'react-intl/locale-data/de';
import frLocaleData from 'react-intl/locale-data/fr';
import plLocaleData from 'react-intl/locale-data/pl';

import App from './App';
import './index.css';

addLocaleData([...enLocaleData, ...deLocaleData, ...frLocaleData, ...plLocaleData]);

const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;

ReactDOM.render(
  <div>
    <IntlProvider locale={language}>
      <App locale="auto" />
    </IntlProvider>
    <IntlProvider locale="en">
      <App locale="en" />
    </IntlProvider>
    <IntlProvider locale="de">
      <App locale="de" />
    </IntlProvider>
    <IntlProvider locale="fr">
      <App locale="fr" />
    </IntlProvider>
    <IntlProvider locale="pl">
      <App locale="pl" />
    </IntlProvider>
  </div>,
  document.getElementById('root')
);
