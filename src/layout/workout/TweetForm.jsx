import React, { Component } from 'react'
import {Field, formValueSelector, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {compose} from 'redux'
import TextField from '@material-ui/core/TextField/TextField'
import {withStyles, Button, Switch} from '@material-ui/core'
import BlockTweet from './BlockTweet'
import {goFetchApi} from '../../fetch/fetch'
import others from '../../modules/intl/fr/others'
import Select from '@material-ui/core/Select/Select'

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */

class TweetForm extends Component {
  constructor() {
    super()
    this.state = {
      displayTemplate: false
    }
  }

  _toggleTemplate = event => {
    const value = event.target.checked
    this.setState({
      displayTemplate: value
    })
  }

  _handleSubmit = data => {
    goFetchApi('http://localhost:5000/add/Tweet', data)
      .then(beta => console.log('Hariba', beta))
  }



  render() {
    const { title, content, category, publicationDate } = this.props

    return (
      <>
        {
          this.state.displayTemplate ?
            (
              <form onSubmit={this.props.handleSubmit((values) => this._handleSubmit(values))}>
                <Field
                  label='Titre'
                  id='title'
                  name='title'
                  component={RenderTextField}
                  style={{width: '300px'}}
                />
                <br/>
                <Field
                  label='Contenu'
                  name='content'
                  component={RenderTextField}
                  multiline
                  rows='4'
                  style={{width: '300px'}}
                />
                <br/>
                <Field
                  label='Date de publication'
                  name='publicationDate'
                  component={RenderDatePicker}
                  style={{width: '300px'}}
                />
                <Field
                  label='Catégorie'
                  name='category'
                  component={RenderSelectField}
                  style={{width: '300px'}}
                >
                  <option value=''></option>
                  <option value="article">Article</option>
                  <option value="tweet">Tweet</option>
                  <option value="mixte">Mixte</option>
                  <option value="badge">Badge</option>
                  <option value="img">Image</option>
                </Field>
                <br/>
                <Button
                  type='submit'
                >Submit
                </Button>
              </form>
            )
            :
            (
              <BlockTweet
                key='i'
                title={title}
                category={category}
                description={content}
                publicationDate={publicationDate}
                like
                expand
                info
              />
            )
        }


        <Switch
          checked={this.state.displayTemplate}
          onChange={e => this._toggleTemplate(e)}
          value={this.state.displayTemplate}
        />
      </>
    )
  }
}

/**
 *
 * @param props
 * @returns component fonction
 * @constructor
 */
const RenderTextField = ({input, meta: { touched, error, invalid, ...meta }, ...otherProps}) => {
  console.log('test meta', touched, error, meta)
  return (
  <TextField
    {...input}
    error={invalid && touched}
    // errorText={touched && error}
    helperText={touched && error}
    {...otherProps}
  />
)
}

const RenderSelectField = ({input, meta, children, ...othersProps}) => {
  return (
    <Select
      {...input}
      {...othersProps}
    >{children}</Select>
  )
}

const RenderDatePicker = ({input, meta: { touched, error, invalid, ...meta }, ...otherProps}) => {
  // TODO: 'ajouter le défaultValue date du jour'
  return (
    <>
      <TextField
        type='date'
        error={invalid && touched}
        // errorText={touched && error}
        helperText={touched && error}
        {...input}
        {...otherProps}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  )
}

// const RenderDatePicker2 = ({label, meta, ...otherProps}) => {
//   return (
//     <TextFieldMU>
//
//     </TextFieldMU>
//   )
// }



const style = theme =>  {

}

const validate = (data) => {
  console.log('couicoui', data)
  const error = {}

  const requiredFields = [
    'title',
    'category',
    'content',
    'publicationDate'
  ]

  requiredFields.forEach(field => {
    if (!data[field]) {
      error[field] = 'Required'
    }
  })

  if (data && data.title && data.title.length >24) error.title = 'Titre trop long'

  if (data && data.category && data.category.length > 220) error.content = 'Contenu trop long'





  return error
}


const selector = formValueSelector('add-tweet')

const mapStateToProps = (state) => {
  const {
    title,
    content,
    category,
    publicationDate
  } = selector(state, 'title', 'content', 'category', 'publicationDate')
  return ({
    title,
    content,
    category,
    publicationDate
  })
}




const actions = {

}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({
    form: 'add-tweet',
    validate
  }),
  withStyles(style)
)(TweetForm)