// Base

import React from 'react'
import { render } from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'


// Redux & Router
import {Provider} from 'react-redux'
import store, { history } from './modules/reducers/store'
import {Route, Switch} from 'react-router-dom'


// intl
import { IntlProvider, addLocaleData } from 'react-intl'
import locale_en from 'react-intl/locale-data/en'
import locale_fr from 'react-intl/locale-data/fr'
import message_fr from './modules/intl/fr.js'
import message_en from './modules/intl/en.js'


// componants
import App from './App'
import Tester from './componants/Tester'
import {Router} from 'react-router'
import Container from './container/Container'
import Lazy from './pages/Lazy/Lazy'
import BlockUnit from './componants/block/BlockUnit'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './modules/theme/overrideTheme'
import Block from './componants/block/BlockMixt'
import AddSomething from './pages/addSomething/AddSomething'
import Workshop from './layout/workout/Workshop'
import error404 from './container/error/404'
console.log('toto', AddSomething)

addLocaleData([...locale_fr, ...locale_en])

store.subscribe(() => {
  // console.log('subscribe', store.getState());
});

const messages = {
    'fr': message_fr,
    'en': message_en
}
const language = navigator.language.split(/[-_]/)[0]

console.log('environnement', window)

const target = document.getElementById('root')

class Fake extends React.Component {
  render() {
    return (
      <div>
        Toto
      </div>
    )
  }
}

console.log(Fake)

render(
  <Provider store={store}>
        <IntlProvider locale={language} messages={messages[language]}>
          <MuiThemeProvider theme={theme}>
          <Router history={history}>
              <Switch>
                <Route path='/' component={App}/>
                <Route exact path='/container' component={Container}/>
                <Route path='/test/tester/:id' component={Tester}/>
                <Route exact path='/lazy' component={Lazy}/>
                <Route exact path='/all' component={BlockUnit}/>
                <Route component={error404}/>

                <Route exact path='/addsomething' component={AddSomething}/>
              </Switch>
          </Router>
          </MuiThemeProvider>
        </IntlProvider>
  </Provider>
    , target)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
