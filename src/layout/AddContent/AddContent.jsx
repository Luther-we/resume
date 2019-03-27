import React, { PureComponent } from 'react'
import {reduxForm} from 'redux-form'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {Button, Paper, withStyles} from '@material-ui/core'
import AddTweet from './AddTweet'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography/Typography'
import {Route, Switch} from 'react-router'
import AddArticle from './AddArticle'
import AddImage from './AddImage'
import AddMixte from './AddMixte'
import axios from "axios"

const validate = (values) => {
  const errors = {}

  return errors
}

const style = theme => ({
  paper: {
    maxWidth: '400px',
    margin: 'auto',
    display: 'block',

  },
})

const element = ['Article', 'Tweet', 'Image', 'Mixte']

class AddContent extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      value: 0,
      status: '',
      responseData: ''
    }
  }

  submit = (e) => {
    console.log('time', e)
    const rep = e.title
    axios.post('http://localhost:5000/add/Tweet', {a: 'bonjour'})
    // .then((res) => res.json())
    .then(data => {
      console.log('data', data)
      const stringnif = JSON.stringify(data.data)
      this.setState({
        status: data.status,
        responseData: stringnif
      })
    })
    .catch(e => console.log('no', e))
  }

  onChangeHandle = (e, v) => {
    this.setState({
      category: v
    })
    console.log('test de ', v)
  }

  handleChange = (v) => {
    this.setState({
      value: v
    })
    console.log('test de ', v)
  }

  render() {
    const { classes } = this.props
    return (
      <>
            <Paper className={classes.paper} >
              {element.map((item, index) => (
                <Button key={index}>
                  <Link to={`/add/${item}`} >
                    {item}
                  </Link>
                </Button>
              ))}
            </Paper>
          <Paper className={classes.paper}>
        <form onSubmit={this.props.handleSubmit((values) => this.submit(values))}>
          <Switch>
            <Route exact path='/add/Tweet' component={AddTweet}/>
            <Route exact path='/add/Article' component={AddArticle}/>
            <Route exact path='/add/Image' component={AddImage}/>
            <Route exact path='/add/Mixte' component={AddMixte}/>
          </Switch>

          <Button
            type="submit"
          > Submit </Button>
        </form>
          </Paper>
        <Paper className={classes.paper}>
        status: {this.state.status}
        data: {this.state.responseData}
        </Paper>
      </>
    )
  }
}



const action = {
}

const mapStateToProps = (state) => ({

})
/**
 * Represent default
 * @param test
 */
export default compose(
  connect(
    mapStateToProps,
    action
  ),
  reduxForm({
    form: 'addContent',
    validate
  }),
  withStyles(style))(AddContent)


// const selector = formValueSelector('selectingFormValues') // <-- same as form name
// SelectingFormValuesForm = connect(
//   state => {
//     // can select values individually
//     const hasEmailValue = selector(state, 'hasEmail')
//     const favoriteColorValue = selector(state, 'favoriteColor')
//     // or together as a group
//     const { firstName, lastName } = selector(state, 'firstName', 'lastName')
//     return {
//       hasEmailValue,
//       favoriteColorValue,
//       fullName: `${firstName || ''} ${lastName || ''}`
//     }
//   }
// )(SelectingFormValuesForm)
//
//
// import {Button, Paper} from '@material-ui/core'
// import TextInput from '../../componants/inputs/TextInput'
// import SelectInput from '../../componants/inputs/SelectInput'
//
// const validate = (values) => {
//   const errors = {}
//
//   return errors
// }
//
// class AddSomething extends PureComponent {
//
//   submit = (e) => {
//     console.log('time', e)
//   }
//
//   render() {
//     return (
//       <div >
//         <Paper>
//           <form onSubmit={(values) => this.submit(values)}>
//             <Field
//               label='Title'
//               name='title'
//               component={TextInput}
//             />
//             <br/>
//             <Field
//               label='Description'
//               name='description'
//               component={TextInput}
//             />
//             <br/>
//             <Field
//               label='Toto'
//               name='toto'
//               arrayItem={['bonjour', 'au revoir']}
//               component={SelectInput}
//             />
//             <br/>
//             <br/>
//             < Button
//               type="submit"
//             > Submit </Button>
//           </form>
//         </Paper>
//
//         < Button
//         > gsgsg </Button>
//       </div>
//     )
//   }
// }
//
// const action = {
// }
//
// const mapStateToProps = (state) => ({})
//
// export default compose(
//   connect(
//     mapStateToProps,
//     action
//   ),
//   reduxForm({
//     form: 'add-something',
//
//   }))(AddSomething)
