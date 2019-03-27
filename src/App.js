import React, { Component } from 'react'
import './App.css'

import HeaderBar from './componants/headerBar/HeaderBar'
import BlockUnit from './componants/block/BlockUnit'
import AppBar from './componants/appBar/AppBar'
import {Route, Switch} from 'react-router-dom'
import error404 from './container/error/404'
import AddContent from './layout/AddContent/AddContent'
import Workshop from './layout/workout/Workshop'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <HeaderBar />
        </header>
        <Switch>
          <Route exact path='/' component={BlockUnit}/>
          <Route path='/add' component={AddContent}/>
          <Route path='/workshop' component={Workshop}/>

        </Switch>
        <AppBar/>
      </div>
    );
  }
}

export default App;
