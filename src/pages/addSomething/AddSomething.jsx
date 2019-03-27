import React, {PureComponent} from 'react'
import {Field, reduxForm} from 'redux-form'
import {compose} from 'redux'
import {connect} from 'react-redux'

import {Button, Paper} from '@material-ui/core'
import TextInput from '../../componants/inputs/TextInput'
import SelectInput from '../../componants/inputs/SelectInput'

const validate = (values) => {
  const errors = {}

  return errors
}

class AddSomething extends PureComponent {

  submit = (e) => {
    console.log('time', e)
  }

  render() {
    return (
      <div >
        <Paper>
          <form onSubmit={(values) => this.submit(values)}>
            <Field
              label='Title'
              name='title'
              component={TextInput}
            />
            <br/>
            <Field
              label='Description'
              name='description'
              component={TextInput}
            />
            <br/>
            <Field
              label='Toto'
              name='toto'
              arrayItem={['bonjour', 'au revoir']}
              component={SelectInput}
            />
            <br/>
            <br/>
            < Button
              type="submit"
            > Submit </Button>
          </form>
        </Paper>

        < Button
        > gsgsg </Button>
      </div>
    )
  }
}

const action = {
}

const mapStateToProps = (state) => ({})

export default compose(
  connect(
    mapStateToProps,
    action
  ),
  reduxForm({
    form: 'add-something',

  }))(AddSomething)
