import React, {PureComponent} from 'react'
import Paper from '@material-ui/core/Paper/Paper'
import {Link} from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs/Tabs'
import Tab from '@material-ui/core/Tab/Tab'
import {Route, Switch} from 'react-router'
import Tweet from './TweetForm'
import TweetForm from './TweetForm'

const InvokeComponent = (component) => {
  return component
}
const element = ['Article', 'Tweet', 'Image', 'Mixte']

class Workshoptest extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      largeur: 400,
      hauteur: 500,
      value: element[0]
    }
  }

  handleChange = (event, value) => {
    this.setState({ value })
    console.log(this.state)
  }



  getWidthTab = () => {
    return 100/element.length
  }

  render() {
    console.log(this.props)
    const currentPath = this.props.match.path

    return (
      <><div>
          <p>Hey, je suis Workshop</p>
        </div>
        <p>
        Je suis une fenêtre de {this.state.largeur} de largeur et {this.state.hauteur} d'hauteur
        </p>
        <Paper style={{
          width:`${this.state.largeur}px`,
          height:`${this.state.hauteur}px`,
          margin: 'auto',
          // display: 'flex',
          direction: 'column',
          flexGrow: 1,
          alignItems: 'space-between',
          justifyContent: 'space-between'
        }}>
          <Paper />
          <Tabs
            value={this.state.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
          >
            {element.map((item, index) => (
              <Tab
                style={{
                  width: `${this.getWidthTab()}%`
                }}
                to={`/workshop/test/${item}`}
                component={Link}
                key={index}
                label={item}
                value={item}
              />
              ))}
          </Tabs>
          <Switch>

            {element.map((item, index, tab) => (
              <Route key={index} path={`/workshop/test/:id`} component={TweetForm}/>
            ))}
          </Switch>
        </Paper>

      </>
    );
  }
}

export default Workshoptest;
