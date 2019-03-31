import React, { Component } from 'react'
import './App.css'

import HeaderBar from './componants/headerBar/HeaderBar'
import BlockUnit from './componants/block/BlockUnit'
import AppBar from './componants/appBar/AppBar'
import { Route, Switch } from 'react-router-dom'
import AddContent from './layout/AddContent/AddContent'
import Workshoptest from './layout/workout/Workshoptest'
import HomeWorkshop from './layout/workout/HomeWorkshop'

const routes = [
  {
    to: '/workshop/test',
    component: 'Workshoptest'
  },
  {
    to: '/workshop/test2',
    component: 'Workshoptest'
  },
  {
    to: '/workshop/test3',
    component: 'Workshoptest'
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <HeaderBar />
        </header>
        <Switch>
          {/*<Route exact path='/' component={BlockUnit}/>*/}
          <Route path='/add' component={AddContent}/>
          <Route exact path='/workshop' component={HomeWorkshop}/>
          <Route path='/workshop/:id' component={Workshoptest}/>

            {/*{routes.map((item, index) => (*/}
              {/*<Route path={item.to} component={Workshoptest}/>*/}
            {/*))}*/}

        </Switch>
        <AppBar/>
      </div>
    );
  }
}

export default App;
