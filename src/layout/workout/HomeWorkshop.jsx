import React, {PureComponent} from 'react'
import { compose} from 'redux'
import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core'
// import {setNewElement$} from '...'
import Paper from '@material-ui/core/Paper/Paper'
import Typography from '@material-ui/core/Typography/Typography'
import Button from '@material-ui/core/Button/Button'
import {Route, Switch} from 'react-router'
import Workshoptest from './Workshoptest'
import {replace} from 'react-router-redux'

const style = theme => ({})

const element = [
  {
    title: 'titre',
    category: 'catégorie',
    description: 'une description, une description,une description,une description,une description,une' +
      ' description,une description,une description,',
    tag: ['tag', 'tag', 'tag'],
    style: ['style1'],
    url: '/test'
  },
  {
    title: 'titre 2',
    category: 'catégorie',
    description: 'une description, une description,une description,une description,une description,une' +
      ' description,une description,une description,',
    tag: ['tag', 'tag', 'tag'],
    style: ['style1'],
    url: '/test2'
  },
  {
    title: 'titre 3',
    category: 'catégorie',
    description: 'une description, une description,une description,une description,une description,une' +
      ' description,une description,une description,',
    tag: ['tag', 'tag', 'tag'],
    style: ['style1'],
    url: '/test3'
  }
]

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

const ButtonRouter = (props) => {
  console.log('test', props)
 return ( <Route render={({ history}) => (
    <Button
      type='button'
      onClick={() => { history.push(props.to) }}
    >
      {props.label}
    </Button>
  )} />
)
}

const urlContainer = '/workshop'

class HomeWorkshop
  extends PureComponent {
  handleThis = (url) => {
    console.log('yes !', url)
    return replace(url)
  }


  render() {
    // const {name} = this.props
    return (
      <>
        <div>
        <Paper
          style={{
            width:'400px',
            margin: 'auto'
          }}
        >
          {element.map((item, index) => (
          <Paper
            key={index}
          >
            <Typography>
              {item.title}
            </Typography>
            <Typography>
              {item.description}
            </Typography>
            <Typography>
              {item.category}
            </Typography>
            <ButtonRouter
              label={`${urlContainer}${item.url}`}
              to={`${urlContainer}${item.url}`}
            />
          </Paper>
            ))}
        </Paper>
          <Button
            onClick={() => console.log('go to modal open')}
          >
            Créer un espace de travail
          </Button>
          {/*<Switch>*/}
            {/*{routes.map((item, index) => (*/}
              {/*<Route key={index} path={item.to} component={Workshoptest}/>*/}
            {/*))}*/}
          {/*</Switch>*/}
        </div>

        {/*{name}*/}
      </>
    )
  }
}

HomeWorkshop.propTypes = {
  // newElement: PropTypes.object.isRequired,
}

HomeWorkshop.defaultProps = {
  // newElement:,
}

const mapStateToProps = state => ({
  // newElement: state.,
})

const actions = {
  // setNewElement$,
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ), withStyles(style),
)(HomeWorkshop)



