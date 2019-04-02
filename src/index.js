// Base

import React from 'react'
import { render } from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

// Redux & Router
import { Provider } from 'react-redux'
import store, { history } from './modules/reducers/store'

// intl
import { IntlProvider, addLocaleData } from 'react-intl'
import locale_en from 'react-intl/locale-data/en'
import locale_fr from 'react-intl/locale-data/fr'
import message_fr from './modules/intl/fr.js'
import message_en from './modules/intl/en.js'

// componants
import App from './App'
import { Router } from 'react-router'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './modules/theme/overrideTheme'

addLocaleData([...locale_fr, ...locale_en])

// store.subscribe(() => {
//   // console.log('subscribe', store.getState());
// });

const messages = {
  'fr': message_fr,
  'en': message_en
}
const language = navigator.language.split(/[-_]/)[0]

// console.log('environnement', window)

const target = document.getElementById('root')

render(
  <Provider store={store}>
    <IntlProvider locale={language} messages={messages[language]}>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <App />
        </Router>
      </MuiThemeProvider>
    </IntlProvider>
  </Provider>
, target)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
