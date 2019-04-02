import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { Redirect } from 'react-router'

import HeaderBar from './componants/headerBar/HeaderBar'
import AppBar from './componants/appBar/AppBar'
import Error404 from './container/error/404'
import AllPage from './pages/allPage/AllPage'
import Login from './pages/login/Login'
import Logout from './pages/logout/Logout'
import Article from './pages/article/Article'
import AddContent from './pages/addContent/AddContent'
import Workshop from './pages/workshop/Workshop'


const routes = [
  {
    path: '/all/:mode',
    component: AllPage,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/logout',
    component: Logout,
  },
  {
    path: '/article/:id',
    component: Article,
  },
  {
    path: '/add/:form',
    component: AddContent,
  },
  {
    path: '/workshop',
    component: Workshop,
  },
  {
    component: Error404,
  },
]

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      <route.component {...props}>
        <Switch>
          {route.routes && route.routes.map((subRoute, i) => (
            <RouteWithSubRoutes key={i} {...subRoute} />
          ))}
        </Switch>
      </route.component>
    )}
  />
)

const App = () => (
  <div className="App">
    <header>
      <HeaderBar />
    </header>
    <Switch>
      <Redirect exact from="/" to="/all" />
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
    <AppBar />
  </div>
)

export default App
